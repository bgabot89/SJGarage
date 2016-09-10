$(document).ready(function() {
  //declare a variable from the san jose API
  var SJSON = 'http://api.data.sanjoseca.gov/api/v2/datastreams/PARKI-GARAG-DATA/data.json/?auth_key=d4e1a9d40c8be33ef960c83f7a9fa88f6250e658&';
  $.getJSON(SJSON, function(data) {
  //parses out each individual entry into the table
    $.each(data.result.fArray, function(i,f) {
      var tblRow = "<tr>" + "<td>" + f.fStr + "</td>" + "<td>" + "<td>" + f.fHeader + "<td>" + "<td>" + "</tr>"
        $(tblRow).appendTo('#SJData tbody');
    })
  })
  console.log('page is loaded');
});
