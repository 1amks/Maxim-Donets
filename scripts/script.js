function init() {
    let map = new ymaps.Map('map-test', {
        center: [47.23277440339449,39.59322351796956],
        zoom: 10
    });
}
ymaps.ready(init);