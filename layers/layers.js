ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3763").setExtent([6334.534043, 117734.445560, 7927.325709, 118586.403894]);
var wms_layers = [];


        var lyr_GoogleRoad = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_DGTOrtos2021 = new ol.layer.Tile({
            source: new ol.source.TileWMS(({
                url: "http://cartografia.dgterritorio.gov.pt:8080/ortos2021/service",
                attributions: "<a class='legend'><b>DGT Ortos 2021</b><br />\
                <img src=''></a>",
                params: {
                "LAYERS": "DGT_Ortos2021",
                //"TILED": "true",
                "VERSION": "1.1.1"},
            })),
            title: "<div id='layertitle'>DGT Ortos 2021<br />\
            <i class='fas fa-angle-up' id='secondImage'></i><i class='fas fa-angle-down' id='firstImage'></i></div><a class='layerlegend'>\
            <img src=''></a>",
            popuplayertitle: "DGT Ortos 2021",
            permalink: 'DGTOrtos2021',
            opacity: 1.000000,
            });

    wms_layers.push([lyr_DGTOrtos2021, 1]);
    lyr_DGTOrtos2021.setVisible(false);

        var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
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
                                layers: [lyr_GoogleRoad,lyr_DGTOrtos2021,lyr_GoogleSatellite,],
                                openInLayerSwitcher: true,
                                title: "Mapas"});

lyr_GoogleRoad.setVisible(false);lyr_DGTOrtos2021.setVisible(false);lyr_GoogleSatellite.setVisible(true);lyr_Toponmia.setVisible(true);lyr_NrdePolcia.setVisible(true);lyr_Lugares.setVisible(true);lyr_CAOP.setVisible(true);
var layersList = [group_Mapas,group_ToponmiaNrPolcia,lyr_Lugares,lyr_CAOP];
lyr_Toponmia.set('fieldAliases', {'nome_completo': 'nome_completo', 'lugar': 'lugar', 'obs': 'obs', });
lyr_NrdePolcia.set('fieldAliases', {'obs': 'obs', 'freguesia': 'freguesia', 'lugar': 'lugar', 'nome_rua': 'nome_rua', 'numero': 'numero', 'obs_user': 'obs_user', });
lyr_Lugares.set('fieldAliases', {'nome_lugar': 'nome_lugar', 'freguesia': 'freguesia', 'concelho': 'concelho', });
lyr_CAOP.set('fieldAliases', {'dicofre': 'dicofre', 'freguesia': 'freguesia', 'concelho': 'concelho', 'distrito': 'distrito', 'des_simpli': 'des_simpli', });
lyr_Toponmia.set('fieldImages', {'nome_completo': 'TextEdit', 'lugar': 'TextEdit', 'obs': 'TextEdit', });
lyr_NrdePolcia.set('fieldImages', {'obs': 'TextEdit', 'freguesia': 'TextEdit', 'lugar': 'TextEdit', 'nome_rua': 'TextEdit', 'numero': 'TextEdit', 'obs_user': '', });
lyr_Lugares.set('fieldImages', {'nome_lugar': 'TextEdit', 'freguesia': 'TextEdit', 'concelho': 'TextEdit', });
lyr_CAOP.set('fieldImages', {'dicofre': 'TextEdit', 'freguesia': 'TextEdit', 'concelho': 'TextEdit', 'distrito': 'TextEdit', 'des_simpli': 'TextEdit', });
lyr_Toponmia.set('fieldLabels', {'nome_completo': 'inline label - always visible', 'lugar': 'inline label - always visible', 'obs': 'inline label - always visible', });
lyr_NrdePolcia.set('fieldLabels', {'obs': 'hidden field', 'freguesia': 'hidden field', 'lugar': 'inline label - always visible', 'nome_rua': 'hidden field', 'numero': 'no label', 'obs_user': 'no label', });
lyr_Lugares.set('fieldLabels', {'nome_lugar': 'inline label - always visible', 'freguesia': 'hidden field', 'concelho': 'hidden field', });
lyr_CAOP.set('fieldLabels', {'dicofre': 'hidden field', 'freguesia': 'hidden field', 'concelho': 'hidden field', 'distrito': 'hidden field', 'des_simpli': 'hidden field', });
lyr_CAOP.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});