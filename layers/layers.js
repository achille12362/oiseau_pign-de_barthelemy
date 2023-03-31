var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_Parcours_1 = new ol.format.GeoJSON();
var features_Parcours_1 = format_Parcours_1.readFeatures(json_Parcours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcours_1.addFeatures(features_Parcours_1);
var lyr_Parcours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcours_1, 
                style: style_Parcours_1,
                interactive: true,
                title: '<img src="styles/legend/Parcours_1.png" /> Parcours'
            });
var format_Pointdcoute_2 = new ol.format.GeoJSON();
var features_Pointdcoute_2 = format_Pointdcoute_2.readFeatures(json_Pointdcoute_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdcoute_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointdcoute_2.addFeatures(features_Pointdcoute_2);
var lyr_Pointdcoute_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdcoute_2, 
                style: style_Pointdcoute_2,
                interactive: true,
                title: '<img src="styles/legend/Pointdcoute_2.png" /> Point d\'écoute'
            });
var format_nom_oiseaux_alain_andre_3 = new ol.format.GeoJSON();
var features_nom_oiseaux_alain_andre_3 = format_nom_oiseaux_alain_andre_3.readFeatures(json_nom_oiseaux_alain_andre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nom_oiseaux_alain_andre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nom_oiseaux_alain_andre_3.addFeatures(features_nom_oiseaux_alain_andre_3);
var lyr_nom_oiseaux_alain_andre_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nom_oiseaux_alain_andre_3, 
                style: style_nom_oiseaux_alain_andre_3,
                interactive: true,
                title: '<img src="styles/legend/nom_oiseaux_alain_andre_3.png" /> nom_oiseaux_alain_andre'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_Parcours_1.setVisible(true);lyr_Pointdcoute_2.setVisible(true);lyr_nom_oiseaux_alain_andre_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_Parcours_1,lyr_Pointdcoute_2,lyr_nom_oiseaux_alain_andre_3];
lyr_Parcours_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Pointdcoute_2.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_nom_oiseaux_alain_andre_3.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'nombre': 'nombre', 'contact': 'contact', 'certitude': 'certitude', });
lyr_Parcours_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_Pointdcoute_2.set('fieldImages', {'ele': 'TextEdit', 'time': 'DateTime', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'Range', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'Range', });
lyr_nom_oiseaux_alain_andre_3.set('fieldImages', {'id': '', 'nom': '', 'nombre': '', 'contact': '', 'certitude': '', });
lyr_Parcours_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Pointdcoute_2.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_nom_oiseaux_alain_andre_3.set('fieldLabels', {'id': 'no label', 'nom': 'inline label', 'nombre': 'inline label', 'contact': 'no label', 'certitude': 'inline label', });
lyr_nom_oiseaux_alain_andre_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});