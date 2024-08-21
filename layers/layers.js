ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([6124.492053, 117597.640870, 7992.094639, 118615.528535]);
var wms_layers = [];


        var lyr_GoogleRoad = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
                attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatellite = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
                attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
                attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Toponmia = new ol.format.GeoJSON();
var features_Toponmia = format_Toponmia.readFeatures(json_Toponmia, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Toponmia = new ol.source.Vector({
                attributions: '<a class="legend"><img src="styles/legend/Toponmia.png" /> <b>Toponímia</b>'
                });
jsonSource_Toponmia.addFeatures(features_Toponmia);
var lyr_Toponmia = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Toponmia, 
            style: style_Toponmia,
            permalink: "Toponmia",
            popuplayertitle: "Toponímia",
            interactive: true,
            title: '<img src="styles/legend/Toponmia.png" /> Toponímia'
            });
var format_NrdePolcia = new ol.format.GeoJSON();
var features_NrdePolcia = format_NrdePolcia.readFeatures(json_NrdePolcia, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_NrdePolcia = new ol.source.Vector({
                attributions: '<a class="legend"><img src="styles/legend/NrdePolcia.png" /> <b>Nr. de Polícia</b>'
                });
jsonSource_NrdePolcia.addFeatures(features_NrdePolcia);
var lyr_NrdePolcia = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_NrdePolcia, 
            style: style_NrdePolcia,
            permalink: "NrdePolcia",
            popuplayertitle: "Nr. de Polícia",
            interactive: true,
            title: '<img src="styles/legend/NrdePolcia.png" /> Nr. de Polícia'
            });
var format_Lugares = new ol.format.GeoJSON();
var features_Lugares = format_Lugares.readFeatures(json_Lugares, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_Lugares = new ol.source.Vector({
                attributions: '<a class="legend"><img src="styles/legend/Lugares.png" /> <b>Lugares</b>'
                });
jsonSource_Lugares.addFeatures(features_Lugares);
var lyr_Lugares = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Lugares, 
            style: style_Lugares,
            permalink: "Lugares",
            popuplayertitle: "Lugares",
            interactive: true,
            title: '<img src="styles/legend/Lugares.png" /> Lugares'
            });
var format_CAOP = new ol.format.GeoJSON();
var features_CAOP = format_CAOP.readFeatures(json_CAOP, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3763'});
var jsonSource_CAOP = new ol.source.Vector({
                attributions: '<a class="legend"><img src="styles/legend/CAOP.png" /> <b>CAOP</b>'
                });
jsonSource_CAOP.addFeatures(features_CAOP);
var lyr_CAOP = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_CAOP, 
            style: style_CAOP,
            permalink: "CAOP",
            popuplayertitle: "CAOP",
            interactive: true,
            title: '<img src="styles/legend/CAOP.png" /> CAOP'
            });
var group_ToponmiaNrPolcia = new ol.layer.Group({
                                layers: [lyr_Toponmia,lyr_NrdePolcia,],
                                openInLayerSwitcher: true,
                                title: "Toponímia / Nr. Polícia"});
var group_Mapas = new ol.layer.Group({
                                layers: [lyr_GoogleRoad,lyr_ESRISatellite,lyr_GoogleSatellite,],
                                openInLayerSwitcher: true,
                                title: "Mapas"});

lyr_GoogleRoad.setVisible(true);lyr_ESRISatellite.setVisible(true);lyr_GoogleSatellite.setVisible(true);lyr_Toponmia.setVisible(true);lyr_NrdePolcia.setVisible(true);lyr_Lugares.setVisible(true);lyr_CAOP.setVisible(true);
var layersList = [group_Mapas,group_ToponmiaNrPolcia,lyr_Lugares,lyr_CAOP];
lyr_Toponmia.set('fieldAliases', {'nome_completo': 'nome_completo', 'obs': 'obs', });
lyr_NrdePolcia.set('fieldAliases', {'obs': 'obs', 'freguesia': 'freguesia', 'numero': 'numero', });
lyr_Lugares.set('fieldAliases', {'nome_lugar': 'nome_lugar', 'freguesia': 'freguesia', 'concelho': 'concelho', });
lyr_CAOP.set('fieldAliases', {'dicofre': 'dicofre', 'freguesia': 'freguesia', 'concelho': 'concelho', 'distrito': 'distrito', 'des_simpli': 'des_simpli', });
lyr_Toponmia.set('fieldImages', {'nome_completo': 'TextEdit', 'obs': 'TextEdit', });
lyr_NrdePolcia.set('fieldImages', {'obs': 'TextEdit', 'freguesia': 'TextEdit', 'numero': 'TextEdit', });
lyr_Lugares.set('fieldImages', {'nome_lugar': 'TextEdit', 'freguesia': 'TextEdit', 'concelho': 'TextEdit', });
lyr_CAOP.set('fieldImages', {'dicofre': 'TextEdit', 'freguesia': 'TextEdit', 'concelho': 'TextEdit', 'distrito': 'TextEdit', 'des_simpli': 'TextEdit', });
lyr_Toponmia.set('fieldLabels', {'nome_completo': 'inline label - always visible', 'obs': 'inline label - visible with data', });
lyr_NrdePolcia.set('fieldLabels', {'obs': 'header label - visible with data', 'freguesia': 'hidden field', 'numero': 'inline label - always visible', });
lyr_Lugares.set('fieldLabels', {'nome_lugar': 'inline label - always visible', 'freguesia': 'hidden field', 'concelho': 'hidden field', });
lyr_CAOP.set('fieldLabels', {'dicofre': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'distrito': 'hidden field', 'des_simpli': 'hidden field', });
lyr_CAOP.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});