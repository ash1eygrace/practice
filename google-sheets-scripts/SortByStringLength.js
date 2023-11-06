/**
 * This function sorts a Google Sheet by the length of the strings in a specific column.
 */
function sortRowsByColumnStringLength() {
  // Get the active sheet of the current spreadsheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Get the range of cells that contain data
  const range = sheet.getDataRange();
  
  // Retrieve all the values from the data range
  let values = range.getValues();
  
  // Remove the first row (header) from the values to avoid sorting it with the data
  const header = values.shift();
  
  // Set the index of the column to sort by (0-indexed: 0 is Column A, 1 is Column B, etc.)
  const columnIndexToSortBy = 0;
  
  // Sort the data based on the length of the strings in the specified column
  values.sort(function(row1, row2) {
    // Compare lengths of the string in the target column between two rows
    return row1[columnIndexToSortBy].length - row2[columnIndexToSortBy].length;
  });
  
  // Re-insert the header row back at the top of the sorted data
  values.unshift(header);
  
  // Write the sorted values back into the sheet
  range.setValues(values);
}

/**
 * This function creates a custom menu in the Google Sheets UI when the sheet is opened.
 * It adds a menu item that, when clicked, will run the sortSheetByStringLength function.
 */
function onOpen() {
  // Access the Google Sheets user interface
  const ui = SpreadsheetApp.getUi();
  
  // Create a new custom menu called 'Custom Scripts'
  ui.createMenu('Custom Scripts')
      // Add an item to the custom menu with the name 'Sort by String Length'
      .addItem('Sort Rows by String Length of Column', 'sortRowsByColumnStringLength')
      // Finally, add the custom menu to the UI so it appears in the menu bar
      .addToUi();
}