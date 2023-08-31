let cacheData = "PortfolioCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.721d7040.js',
                '/static/css/main.fd6f82c3.css',
                '/static/media/GitHub.1ff6d9646165b7f34af9.png',
                '/static/media/LinkedIn.ba884e1f9ad4362348c1.png',
                '/static/media/ProfilePic.d9c1b25b530df458388c.jpg',
                '/static/media/reactJs.a060cbe85e50deda1d61452cee9de5b2.svg',
                '/static/media/javascript.081325c6f229605dce15142ddd948d6d.svg',
                '/static/media/csharp.a7ec03d256f307422701fb3e4c812f76.svg',
                '/static/media/Proj1Img.ff8231f8eb825b00a25e.png',
                '/static/media/Proj2Img.d77635839fd897a20b00.png',
                '/static/media/Proj3Img.bcc2385ba4b758cda533.png',
                '/static/media/Proj4Img.68a675703480a1bbffa3.png',
                '/static/media/Proj5Img.94511d9ce92144f38a79.png',
                '/static/media/Proj6Img.3dda44ac81af62c9d28d.png',
                '/static/media/Proj7Img.6cdac19400b4626d7a93.png',
                '/static/media/Proj8Img.6bc988513369d998f674.png',
                '/static/media/Proj9Img.81213894169409b9e708.png',
                '/static/media/Proj10Img.9c626918806424086fd1.png',
                '/static/media/Proj11Img.13fc0a0ea80c8fe85411.png',
                '/manifest.json',
                '/Icon.png',
                '/Icon192.png',
                '/Icon512.png',
                '/index.html',
                '/',
                '/About',
                '/Projects',
                '/Contact'
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })
        )
    }
})