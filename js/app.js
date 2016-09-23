$(document).ready(function() {
  //declare empty Arrays and strings to be used on the html document
  var GarageNames = [];
  var Names = "";
  var GarageStatus = [];
  var Status = "";
  var GarageAvailable = [];
  var Available = "";
  var GarageTotal = [];
  var Total = "";
  var Sets = "Total Garages";

  //declares a variable that uses the data from the San Jose Parking Garage Data JSON
  var SJSON = 'http://api.data.sanjoseca.gov/api/v2/datastreams/PARKI-GARAG-DATA/data.ajson/?auth_key=d4e1a9d40c8be33ef960c83f7a9fa88f6250e658&limit=50&';
  $.getJSON(SJSON, function(data) {
    // for each entry push into new array
      for (var i=1; i < data.result.length; i++) {
        GarageNames.push(data.result[i][0]);
        GarageStatus.push(data.result[i][1]);
        GarageAvailable.push(data.result[i][2]);
        GarageTotal.push(data.result[i][3]);
      }
    // increment and append to html
      for (var j=0; j < GarageNames.length; j++) {
        console.log(GarageTotal[j]);
        // Names += "<li>" + GarageNames[j] + "</li>";
        // Status += "<li>" + GarageStatus[j] + "</li>";
        // Available += "<li>" + GarageAvailable[j] + "</li>";
        // Total += "<li>" + GarageTotal[j] + "</li>";
        Sets += "<li>" + GarageNames[j] + " " +  GarageStatus[j] +  " " + GarageAvailable[j] + " " + GarageTotal[j] + "</li>";
    }
    // Garage = Names + " " + " " + Status + " " + Available + " " + Total;
    document.getElementById("GarageList").innerHTML  = Sets;
  })
});
