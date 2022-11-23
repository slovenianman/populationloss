ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([55708.258887, 3967894.611113, 672326.404939, 4295147.725763]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Netgrowth1_1 = new ol.format.GeoJSON();
var features_Netgrowth1_1 = format_Netgrowth1_1.readFeatures(json_Netgrowth1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Netgrowth1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netgrowth1_1.addFeatures(features_Netgrowth1_1);
var lyr_Netgrowth1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netgrowth1_1, 
                style: style_Netgrowth1_1,
                interactive: true,
                title: 'Net growth 1'
            });
var format_Netgrowth2_2 = new ol.format.GeoJSON();
var features_Netgrowth2_2 = format_Netgrowth2_2.readFeatures(json_Netgrowth2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Netgrowth2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netgrowth2_2.addFeatures(features_Netgrowth2_2);
var lyr_Netgrowth2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netgrowth2_2, 
                style: style_Netgrowth2_2,
                interactive: true,
                title: 'Net growth 2'
            });
var format_Netgrowth3_3 = new ol.format.GeoJSON();
var features_Netgrowth3_3 = format_Netgrowth3_3.readFeatures(json_Netgrowth3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Netgrowth3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Netgrowth3_3.addFeatures(features_Netgrowth3_3);
var lyr_Netgrowth3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Netgrowth3_3, 
                style: style_Netgrowth3_3,
                interactive: true,
                title: 'Net growth 3'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Netgrowth1_1.setVisible(true);lyr_Netgrowth2_2.setVisible(true);lyr_Netgrowth3_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Netgrowth1_1,lyr_Netgrowth2_2,lyr_Netgrowth3_3];
lyr_Netgrowth1_1.set('fieldAliases', {'code': 'code', 'Name': 'Name', 'Province': 'Province', 'sp_km2': 'sp_km2', 'depop3': 'depop3', 'depop2': 'depop2', 'depop1': 'depop1', });
lyr_Netgrowth2_2.set('fieldAliases', {'code': 'code', 'Name': 'Name', 'Province': 'Province', 'sp_km2': 'sp_km2', 'depop3': 'depop3', 'depop2': 'depop2', 'depop1': 'depop1', });
lyr_Netgrowth3_3.set('fieldAliases', {'code': 'code', 'Name': 'Name', 'Province': 'Province', 'sp_km2': 'sp_km2', 'depop3': 'depop3', 'depop2': 'depop2', 'depop1': 'depop1', });
lyr_Netgrowth1_1.set('fieldImages', {'code': 'TextEdit', 'Name': 'TextEdit', 'Province': 'TextEdit', 'sp_km2': 'TextEdit', 'depop3': 'TextEdit', 'depop2': 'TextEdit', 'depop1': 'TextEdit', });
lyr_Netgrowth2_2.set('fieldImages', {'code': 'TextEdit', 'Name': 'TextEdit', 'Province': 'TextEdit', 'sp_km2': 'TextEdit', 'depop3': 'TextEdit', 'depop2': 'TextEdit', 'depop1': 'TextEdit', });
lyr_Netgrowth3_3.set('fieldImages', {'code': 'TextEdit', 'Name': 'TextEdit', 'Province': 'TextEdit', 'sp_km2': 'TextEdit', 'depop3': 'TextEdit', 'depop2': 'TextEdit', 'depop1': 'TextEdit', });
lyr_Netgrowth1_1.set('fieldLabels', {'code': 'inline label', 'Name': 'inline label', 'Province': 'inline label', 'sp_km2': 'inline label', 'depop3': 'inline label', 'depop2': 'inline label', 'depop1': 'inline label', });
lyr_Netgrowth2_2.set('fieldLabels', {'code': 'inline label', 'Name': 'inline label', 'Province': 'inline label', 'sp_km2': 'inline label', 'depop3': 'inline label', 'depop2': 'inline label', 'depop1': 'inline label', });
lyr_Netgrowth3_3.set('fieldLabels', {'code': 'inline label', 'Name': 'inline label', 'Province': 'inline label', 'sp_km2': 'inline label', 'depop3': 'inline label', 'depop2': 'inline label', 'depop1': 'inline label', });
lyr_Netgrowth3_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});