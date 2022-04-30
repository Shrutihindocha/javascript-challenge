// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

function refreshTable(table){
    table.forEach(entry => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    })
};

refreshTable(tableData);

// Select the button
var button = d3.select("#filter-btn");
button.on("click", filterDate);

function filterDate() {
    // Prevent the page from refreshing
    // d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    tbody.html(``);
    
    refreshTable(filteredData);
};


