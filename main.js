// Import the necessary modules
import tableData from './data.js';
import renderTable from './renderTable.js';
import populateDates from './populateDates.js';

// Define a function to initialize the application
function init() {
  // Render the initial table
  renderTable(tableData);

  // Populate the date fields
  populateDates(tableData);
}

// Call the init function when the page loads
window.addEventListener('load', init);
