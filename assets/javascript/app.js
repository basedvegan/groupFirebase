// Create variable employeeName 

var employeeName = "";

// Store user input 


// Create variable Role
var role = "";
// Store user input 

// Create variable startDate
var startDate = "";

// Store user input

// Create monthly Rate
var monthlyRate = "";

// store user input

// on click even for the submit button

var months = 0;
var totalBilled = 0;

$("#submit").on("click", function (event) {
event.preventDefault();

    var employeeName = $("#employeeName").val();
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();

// create function for months worked (current date - start date)

//var months = 12;

// create function for total billed (months * monthly rate)

// var totalBilled = months * monthlyRate;

// create table row

$("table").append("<tr><td>" + employeeName + "</td><td>" + role + "</td><td>" + startDate + "</td><td>" + startDate + "</td><td>" + monthlyRate + "</td><td>" + startDate + "</td></tr>");

});