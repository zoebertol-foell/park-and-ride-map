var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_Metrolink_2 = new ol.format.GeoJSON();
var features_Metrolink_2 = format_Metrolink_2.readFeatures(json_Metrolink_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metrolink_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metrolink_2.addFeatures(features_Metrolink_2);
var lyr_Metrolink_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Metrolink_2, 
                style: style_Metrolink_2,
                popuplayertitle: "Metrolink",
                interactive: false,
                title: '<img src="styles/legend/Metrolink_2.png" /> Metrolink'
            });
var format_LAMetroRail_3 = new ol.format.GeoJSON();
var features_LAMetroRail_3 = format_LAMetroRail_3.readFeatures(json_LAMetroRail_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAMetroRail_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAMetroRail_3.addFeatures(features_LAMetroRail_3);
var lyr_LAMetroRail_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAMetroRail_3, 
                style: style_LAMetroRail_3,
                popuplayertitle: "LA Metro Rail",
                interactive: false,
                title: '<img src="styles/legend/LAMetroRail_3.png" /> LA Metro Rail'
            });
var format_ParkandRideLocations_4 = new ol.format.GeoJSON();
var features_ParkandRideLocations_4 = format_ParkandRideLocations_4.readFeatures(json_ParkandRideLocations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParkandRideLocations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkandRideLocations_4.addFeatures(features_ParkandRideLocations_4);
var lyr_ParkandRideLocations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkandRideLocations_4, 
                style: style_ParkandRideLocations_4,
                popuplayertitle: "Park and Ride Locations",
                interactive: true,
    title: 'Park and Ride Locations<br />\
    <img src="styles/legend/ParkandRideLocations_4_0.png" /> Free<br />\
    <img src="styles/legend/ParkandRideLocations_4_1.png" /> Paid<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_Metrolink_2.setVisible(true);lyr_LAMetroRail_3.setVisible(true);lyr_ParkandRideLocations_4.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Positronlabelsonly_1,lyr_Metrolink_2,lyr_LAMetroRail_3,lyr_ParkandRideLocations_4];
lyr_Metrolink_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ELEVATION': 'ELEVATION', 'FID_': 'FID_', 'LAYER': 'LAYER', 'LAYER_1': 'LAYER_1', 'LAYER_2': 'LAYER_2', 'TRK_CODE': 'TRK_CODE', 'UID': 'UID', 'MP_DIR': 'MP_DIR', 'TRK_TYPE': 'TRK_TYPE', 'TRK_NAME': 'TRK_NAME', 'RR_NAME': 'RR_NAME', 'RR_CODE': 'RR_CODE', 'SBDV_NAME': 'SBDV_NAME', 'LAYER1': 'LAYER1', 'LAYER_12': 'LAYER_12', 'SBDV_CODE': 'SBDV_CODE', 'LAYER_123': 'LAYER_123', 'YEAR': 'YEAR', 'DataWareho': 'DataWareho', 'Shapelen': 'Shapelen', });
lyr_LAMetroRail_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_ParkandRideLocations_4.set('fieldAliases', {'State': 'State', 'County': 'County', 'City': 'City', 'Address': 'Address', 'Cost': 'Cost', 'Monthly': 'Monthly', 'Reservation': 'Reservation', 'Number of Spaces': 'Number of Spaces', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City_1': 'City_1', 'State_1': 'State_1', 'County_1': 'County_1', 'Zip': 'Zip', 'Country': 'Country', 'Source': 'Source', });
lyr_Metrolink_2.set('fieldImages', {'OBJECTID': 'Range', 'ELEVATION': 'Range', 'FID_': 'Range', 'LAYER': 'TextEdit', 'LAYER_1': 'TextEdit', 'LAYER_2': 'TextEdit', 'TRK_CODE': 'Range', 'UID': 'TextEdit', 'MP_DIR': 'TextEdit', 'TRK_TYPE': 'TextEdit', 'TRK_NAME': 'TextEdit', 'RR_NAME': 'TextEdit', 'RR_CODE': 'Range', 'SBDV_NAME': 'TextEdit', 'LAYER1': 'TextEdit', 'LAYER_12': 'TextEdit', 'SBDV_CODE': 'TextEdit', 'LAYER_123': 'TextEdit', 'YEAR': 'Range', 'DataWareho': 'TextEdit', 'Shapelen': 'TextEdit', });
lyr_LAMetroRail_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'Range', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'Range', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', 'OBJECTID': 'Range', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ParkandRideLocations_4.set('fieldImages', {'State': 'TextEdit', 'County': 'TextEdit', 'City': 'TextEdit', 'Address': 'TextEdit', 'Cost': 'TextEdit', 'Monthly': 'TextEdit', 'Reservation': 'TextEdit', 'Number of Spaces': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'TextEdit', 'Accuracy Type': 'TextEdit', 'Number': 'TextEdit', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'County_1': 'TextEdit', 'Zip': 'Range', 'Country': 'TextEdit', 'Source': 'TextEdit', });
lyr_Metrolink_2.set('fieldLabels', {'OBJECTID': 'no label', 'ELEVATION': 'no label', 'FID_': 'no label', 'LAYER': 'no label', 'LAYER_1': 'no label', 'LAYER_2': 'no label', 'TRK_CODE': 'no label', 'UID': 'no label', 'MP_DIR': 'no label', 'TRK_TYPE': 'no label', 'TRK_NAME': 'no label', 'RR_NAME': 'no label', 'RR_CODE': 'no label', 'SBDV_NAME': 'no label', 'LAYER1': 'no label', 'LAYER_12': 'no label', 'SBDV_CODE': 'no label', 'LAYER_123': 'no label', 'YEAR': 'no label', 'DataWareho': 'no label', 'Shapelen': 'no label', });
lyr_LAMetroRail_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ParkandRideLocations_4.set('fieldLabels', {'State': 'hidden field', 'County': 'hidden field', 'City': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Cost': 'inline label - visible with data', 'Monthly': 'inline label - visible with data', 'Reservation': 'inline label - visible with data', 'Number of Spaces': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Accuracy Score': 'hidden field', 'Accuracy Type': 'hidden field', 'Number': 'hidden field', 'Street': 'hidden field', 'Unit Type': 'hidden field', 'Unit Number': 'hidden field', 'City_1': 'hidden field', 'State_1': 'hidden field', 'County_1': 'hidden field', 'Zip': 'hidden field', 'Country': 'hidden field', 'Source': 'hidden field', });
lyr_ParkandRideLocations_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});