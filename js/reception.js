// перенаправление на главную страницу спустя 6 секунд
function doRedirect() {
    atTime = '6000'
    toUrl = 'http://index.html'
    setTimeout('location.href = toUrl;', atTime)
}

// Отключение обратного свайпа на планшетах/телефонах
if (navigator.userAgent.match(/iPad|iPhone|Android|Windows Phone|Tablet/i)) {
    window.history.pushState(null, null, window.location.href)
    window.onpopstate =
        function () {
            window.history.pushState(null, null, window.location.href)
        }
}