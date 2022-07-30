
let center = [55.405798, 43.825948];
let count = 0.000100

center[0] -= count * 4 
center[1] -= count * 10

function init() {
    let map = new ymaps.Map('map-test', {
        center: center,
        zoom: 17
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/logo.svg',
        iconImageSize: [100, 52],
        iconImageOffset: [-150, -30]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)



    map.geoObjects.add(placemark);

}

ymaps.ready(init);
