var wms_layers = [];

var lyr_GoogleMapsClassic_0 = new ol.layer.Tile({
  'title': 'Google Maps Classic',
  'type': 'base',
  'opacity': 1.000000,
  source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
    url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
  })
});
/*
var lyr_max8_1 = new ol.layer.Image({
opacity: 1,
title: "max8",
source: new ol.source.ImageStatic({
url: "./layers/max8_1.png",
attributions: '<a href=""></a>',
projection: 'EPSG:3857',
alwaysInRange: true,
imageExtent: [-8042833.209814, -3714839.770901, -7614253.170260, -3261587.361843]
})
});
*/

var lyr_max8_1 = new ol.layer.Tile({
  'title': 'myxyz',
  'opacity': 1.000000,
  source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
    url: './layers/tiles/{z}/{x}/{y}.png'
  })
});

var api_key = '462cc50d377232b94e9c547dcb7a3f9b';
var lyr_GoogleMapsRoads_2 = new ol.layer.Tile({
  'title': 'Google Maps Roads',
  'type': 'base',
  'opacity': 1.000000,
  source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
    url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
  })
});


var layer_cloud = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://a.sat.owm.io/vane/2.0/weather/CL/{z}/{x}/{y}?appid=9de243494c0b295cca9337e1e96b00e2'
  })
});

var layer_radar = new ol.layer.Tile({
  source: new ol.source.XYZ({
    url: 'https://api.accuweather.com/maps/v1/satellite/globalIR/zxy/2019-06-16T11:00:00Z/{z}/{x}/{y}.png?apikey=d41dfd5e8a1748d0970cba6637647d96',
  })
});


var format_centralLine_3 = new ol.format.GeoJSON();
var features_centralLine_3 = format_centralLine_3.readFeatures(json_centralLine_3,
  {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
  var jsonSource_centralLine_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
  });

  jsonSource_centralLine_3.addFeatures(features_centralLine_3);
  var lyr_centralLine_3 = new ol.layer.Vector({
    declutter: true,
    source:jsonSource_centralLine_3,
    style: style_centralLine_3,
    title: '<img src="styles/legend/centralLine_3.png" /> centralLine'
  });

  var format_limiteNorte_4 = new ol.format.GeoJSON();
  var features_limiteNorte_4 = format_limiteNorte_4.readFeatures(json_limiteNorte_4,
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
    var jsonSource_limiteNorte_4 = new ol.source.Vector({
      attributions: '<a href=""></a>',
    });
    jsonSource_limiteNorte_4.addFeatures(features_limiteNorte_4);
    var lyr_limiteNorte_4 = new ol.layer.Vector({
      declutter: true,
      source:jsonSource_limiteNorte_4,
      style: style_limiteNorte_4,
      title: '<img src="styles/legend/limiteNorte_4.png" /> limiteNorte'
    });

    var format_limiteSur_5 = new ol.format.GeoJSON();
    var features_limiteSur_5 = format_limiteSur_5.readFeatures(json_limiteSur_5,
      {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
      var jsonSource_limiteSur_5 = new ol.source.Vector({
        attributions: '<a href=""></a>',
      });
      jsonSource_limiteSur_5.addFeatures(features_limiteSur_5);
      var lyr_limiteSur_5 = new ol.layer.Vector({
        declutter: true,
        source:jsonSource_limiteSur_5,
        style: style_limiteSur_5,
        title: '<img src="styles/legend/limiteSur_5.png" /> limiteSur'
      });

      var group_Path = new ol.layer.Group({
        layers: [lyr_centralLine_3,lyr_limiteNorte_4,lyr_limiteSur_5,],
        title: "Path"});
        var group_group1 = new ol.layer.Group({
          layers: [lyr_GoogleMapsClassic_0,lyr_max8_1,lyr_GoogleMapsRoads_2,layer_cloud,layer_radar,],
          title: "group1"});

          lyr_GoogleMapsClassic_0.setVisible(true);
          lyr_max8_1.setVisible(true);
          lyr_GoogleMapsRoads_2.setVisible(true);

          lyr_centralLine_3.setVisible(true);
          lyr_limiteNorte_4.setVisible(true);
          lyr_limiteSur_5.setVisible(true);
          layer_cloud.setVisible(true);
          var layersList = [group_group1,group_Path];
          lyr_centralLine_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
          lyr_limiteNorte_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
          lyr_limiteSur_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
          lyr_centralLine_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
          lyr_limiteNorte_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
          lyr_limiteSur_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
          lyr_centralLine_3.set('fieldLabels', {});
          lyr_limiteNorte_4.set('fieldLabels', {});
          lyr_limiteSur_5.set('fieldLabels', {});
          lyr_limiteSur_5.on('precompose', function(evt) {
            evt.context.globalCompositeOperation = 'normal';
          });
