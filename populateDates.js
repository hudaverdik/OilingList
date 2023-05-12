import calculateNextDate from './calculateNextDate.js';

// Define a function to populate the date fields in the table
function populateDates(tableData) {
  // Loop through each row in the table
  for (let row of tableData) {
    // Get the oiling interval for this row
    const interval = row.interval;

    // Calculate the next oiling date based on the interval
    const nextDate = calculateNextDate(interval);

    // Get a reference to the date fields in this row
    const oneMonth = row.oneMonth;
    const twoMonth = row.twoMonth;
    const threeMonth = row.threeMonth;
    const sixMonth = row.sixMonth;
    const twelveMonth = row.twelveMonth;

    // Set the value of each date field based on the next oiling date
    oneMonth.textContent = nextDate.oneMonth;
    twoMonth.textContent = nextDate.twoMonth;
    threeMonth.textContent = nextDate.threeMonth;
    sixMonth.textContent = nextDate.sixMonth;
    twelveMonth.textContent = nextDate.twelveMonth;
  }
}

export default populateDates;
