// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// create function to create the table using the data set
function buildTable(data) {
    tbody.html("");  // clears the table information
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        //loop through each field and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });


}