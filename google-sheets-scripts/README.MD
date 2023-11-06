# Google Sheets String Length Sorter Script

This Google Script adds functionality to sort data in a Google Sheet based on the length of the strings in a specified column.

## Features

- **Sort by String Length**: Easily sort your sheet by the length of the strings in any given column.
- **Custom Menu Integration**: Adds a custom menu item to your Google Sheets UI for easy access to the sorting function.

## Prerequisites

Before you can use this script, make sure you have edit access to the Google Sheet where you want to implement the sorting feature.

## Installation

To set up the script in your Google Sheet, follow these steps:

1. Open your Google Sheet in your browser.
2. Navigate to `Extensions > Apps Script`.
3. Delete any code in the script editor and paste the contents of SortByStringLength.js
4. Give your script a title or leave it as Untiled. 
5. Save the script with `Ctrl+S` or `Cmd+S` (for macOS).
6. Refresh your Google Sheets page, and you should see a new menu titled "Custom Scripts" in the toolbar.

## Usage

After installation, you can use the script as follows:

1. Click on the "Custom Scripts" menu in your Google Sheets toolbar.
2. Select "Sort Rows by String Length of Column" to sort your data based on the length of the strings in the first column. (Note if this is the first time running the script, you'll see a popup that says "Authorization required" click OK > Choose your Google Account > Click Advanced > Go To {Project Name} >  Allow )
3. To change the column that you wish to sort by, edit the `columnIndexToSortBy` variable in the script to match the index of your desired column (0-indexed).

## Customization

The default script sorts the first column (index `0`). To change the sorting column:

1. Access the script editor (`Extensions > Apps Script`).
2. Locate the `var columnIndexToSortBy = 0;` line.
3. Change the `0` to the index of the column you want to sort (0 for the first column, 1 for the second, and so on).

## License

This script is provided under the MIT License. See the LICENSE file for more information.

Happy sorting! 