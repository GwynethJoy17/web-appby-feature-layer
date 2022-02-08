 require([
        "esri/Map",
        "esri/views/MapView",
        "esri/layers/FeatureLayer"
      ], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "hybrid"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,

          extent: {
            // autocasts as new Extent()
            xmin: -9177811,
            ymin: 4247000,
            xmax: -9176791,
            ymax: 4247784,
            spatialReference: 102100
          }
        });
var featureLayer_1 = new FeatureLayer({
  url: "https://demographics5.arcgis.com/arcgis/rest/services/USA_Crime/MapServer?ts=1429806138741"
});

map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services1.arcgis.com/4yjifSiIG17X0gW4/arcgis/rest/services/Homicides2018/FeatureServer"
});

map.add(featureLayer_2);
 });
