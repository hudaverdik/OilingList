// Define a function to render the oiling table
function renderTable(data) {
  // Get the table element from the DOM
  const table = document.getElementById("oil-table");

  // Create a table header row
  const headerRow = document.createElement("tr");

  // Create header cells for each column
  const headerCells = ["Location", "Monthly", "Two-Month", "Three-Month", "Six-Month", "Twelve-Month"];
  for (const headerText of headerCells) {
    const headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
  }

  // Add the header row to the table
  table.appendChild(headerRow);

  // Loop through each location in the data and create a table row for each one
  for (const location of data) {
    // Create a new table row
    const row = document.createElement("tr");

    // Create a cell for the location name
    const locationCell = document.createElement("td");
    locationCell.textContent = location.name;
    row.appendChild(locationCell);

    // Loop through the oiling intervals and create cells for each one
    const intervals = ["monthly", "twoMonth", "threeMonth", "sixMonth", "twelveMonth"];
    for (const interval of intervals) {
      const intervalCell = document.createElement("td");
      intervalCell.textContent = location[interval];
      row.appendChild(intervalCell);
    }

    // Add the row to the table
    table.appendChild(row);
  }
}

export default renderTable;
