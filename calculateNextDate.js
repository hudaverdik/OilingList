// Define a function to calculate the next oiling date based on the interval
function calculateNextDate(interval) {
  // Get the current date
  const now = new Date();

  // Calculate the next oiling date based on the interval
  const oneMonth = new Date(now.setMonth(now.getMonth() + 1)).toLocaleDateString();
  const twoMonth = new Date(now.setMonth(now.getMonth() + 1)).toLocaleDateString();
  const threeMonth = new Date(now.setMonth(now.getMonth() + 1)).toLocaleDateString();
  const sixMonth = new Date(now.setMonth(now.getMonth() + 3)).toLocaleDateString();
  const twelveMonth = new Date(now.setMonth(now.getMonth() + 6)).toLocaleDateString();

  // Return an object containing the next oiling dates for each interval
  return { oneMonth, twoMonth, threeMonth, sixMonth, twelveMonth };
}

export default calculateNextDate;
