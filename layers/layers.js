var wms_layers = [];

        var lyr_GoogleMapsClassic_0 = new ol.layer.Tile({
            'title': 'Google Maps Classic',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });var lyr_max8_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "max8",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/max8_1.png",
    attributions: '<a href=""></a>',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8042833.209814, -3667863.649746, -7747836.559212, -3261587.361843]
                            })
                        });
        var lyr_GoogleMapsRoads_2 = new ol.layer.Tile({
            'title': 'Google Maps Roads',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });var format_centralLine_3 = new ol.format.GeoJSON();
var features_centralLine_3 = format_centralLine_3.readFeatures(json_centralLine_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centralLine_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_centralLine_3.addFeatures(features_centralLine_3);var lyr_centralLine_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centralLine_3, 
                style: style_centralLine_3,
                title: '<img src="styles/legend/centralLine_3.png" /> centralLine'
            });var format_limiteNorte_4 = new ol.format.GeoJSON();
var features_limiteNorte_4 = format_limiteNorte_4.readFeatures(json_limiteNorte_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiteNorte_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_limiteNorte_4.addFeatures(features_limiteNorte_4);var lyr_limiteNorte_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limiteNorte_4, 
                style: style_limiteNorte_4,
                title: '<img src="styles/legend/limiteNorte_4.png" /> limiteNorte'
            });var format_limiteSur_5 = new ol.format.GeoJSON();
var features_limiteSur_5 = format_limiteSur_5.readFeatures(json_limiteSur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limiteSur_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_limiteSur_5.addFeatures(features_limiteSur_5);var lyr_limiteSur_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_limiteSur_5, 
                style: style_limiteSur_5,
                title: '<img src="styles/legend/limiteSur_5.png" /> limiteSur'
            });
var group_Path = new ol.layer.Group({
                                layers: [lyr_centralLine_3,lyr_limiteNorte_4,lyr_limiteSur_5,],
                                title: "Path"});
var group_group1 = new ol.layer.Group({
                                layers: [lyr_GoogleMapsClassic_0,lyr_max8_1,lyr_GoogleMapsRoads_2,],
                                title: "group1"});

lyr_GoogleMapsClassic_0.setVisible(true);lyr_max8_1.setVisible(true);lyr_GoogleMapsRoads_2.setVisible(true);lyr_centralLine_3.setVisible(true);lyr_limiteNorte_4.setVisible(true);lyr_limiteSur_5.setVisible(true);
var layersList = [group_group1,group_Path];
lyr_centralLine_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', });
lyr_limiteNorte_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', });
lyr_limiteSur_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Name_2': 'Name_2', 'description_2': 'description_2', 'altitudeMode_2': 'altitudeMode_2', 'tessellate_2': 'tessellate_2', 'extrude_2': 'extrude_2', 'visibility_2': 'visibility_2', 'drawOrder_2': 'drawOrder_2', 'icon_2': 'icon_2', });
lyr_centralLine_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', });
lyr_limiteNorte_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', });
lyr_limiteSur_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Name_2': 'TextEdit', 'description_2': 'TextEdit', 'altitudeMode_2': 'TextEdit', 'tessellate_2': 'Range', 'extrude_2': 'Range', 'visibility_2': 'Range', 'drawOrder_2': 'Range', 'icon_2': 'TextEdit', });
lyr_centralLine_3.set('fieldLabels', {});
lyr_limiteNorte_4.set('fieldLabels', {});
lyr_limiteSur_5.set('fieldLabels', {});
lyr_limiteSur_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});