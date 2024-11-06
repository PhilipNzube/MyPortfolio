let cacheData = "PortfolioCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.b2e22f37.js',
                '/static/css/main.d234310b.css',
                '/static/media/GitHub.1ff6d9646165b7f34af9.png',
                '/static/media/LinkedIn.ba884e1f9ad4362348c1.png',
                '/static/media/ProfilePic.d9c1b25b530df458388c.jpg',
                '/static/media/reactJs.20adfb35ae6a6e5817bf.png',
                '/static/media/javascript.d01ed63b6af001687d6e.png',
                '/static/media/csharp.37668bd5ae0e4c84752c.png',
                '/static/media/ProjImg.3dda44ac81af62c9d28d.png',
                '/static/media/Proj2Img.9c626918806424086fd1.png',
                '/static/media/Proj3Img.13fc0a0ea80c8fe85411.png',
                '/static/media/Proj9Img.450d028efca538be1130.png',
                '/static/media/Proj10Img.148e34b6692e9491bc10.png',
                '/static/media/Proj11Img.dfad39288fd4a0e6bd63.png',
                '/static/media/Play%20Button.e1520f1658df7ec681df.png',
                '/static/media/PauseButton.42129923311106b8d457.png',
                '/static/media/Proj17Img.450d028efca538be1130.png',
                '/static/media/Proj18Img.148e34b6692e9491bc10.png',
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