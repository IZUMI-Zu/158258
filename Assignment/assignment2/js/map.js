var normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
    maxZoom: 18,
    minZoom: 5
});
var imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
    maxZoom: 18,
    minZoom: 5
});
var imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
    maxZoom: 18,
    minZoom: 5
});

var normal = L.layerGroup([normalm]),
    image = L.layerGroup([imgm, imga]);

var baseLayers = {
    "Normal": normal,
    "Satellite": image,
}

var map = L.map("map", {
    center: [39.94, 116.45],
    zoom: 12,
    layers: [normal],
    zoomControl: false
});

var marker = L.marker([39.91, 116.48]).addTo(map);

L.control.layers(baseLayers, null).addTo(map);
L.control.zoom({
    zoomInTitle: 'zoomIn',
    zoomOutTitle: 'zoomOut'
}).addTo(map);