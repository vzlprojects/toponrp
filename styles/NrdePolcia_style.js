var size = 0;
var placement = 'point';

var style_NrdePolcia = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 2.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("numero") !== null) {
        labelText = String(feature.get("numero"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 6.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        image: new ol.style.Circle({radius: 1.4 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(0,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    var interval = 250;
    var geometry = feature.getGeometry();
    if (geometry.getType() === 'MultiLineString') {
      geometry.getLineStrings().forEach(function (line) {
        var length = line.getLength();
        var intervals = Math.ceil(length / (interval * resolution));
        for (let i = 1; i < intervals; ++i) { //will not place labels at the start and end of the line
     // for (let i = 0; i <= intervals; ++i) to include them	
          var point = line.getCoordinateAt(i / intervals);
          var styletext = new ol.style.Style({
            text: new ol.style.Text({
              text: labelText,
              font: labelFont,
              fill: new ol.style.Fill({
                color: labelFill
              }),
              stroke: new ol.style.Stroke({
                color: bufferColor, 
                width: bufferWidth
              }),
            })
         });
          styletext.setGeometry(new ol.geom.Point(point));
          style.push(styletext);
        }
      });
    }

    return style;
};
