<?php
/*
Plugin Name: Lists to CSV
Description: Extracts all ordered and unordered lists from posts within a specified date range and exports them to CSV, alongside their post URLs.
Version: 1.1
Author: @ash1eygrace
*/

/**
 * Fetch lists (both ordered and unordered) from all posts within a given date range 
 * and return them along with the post's permalink.
 *
 * @param string $startDate The start date in 'YYYY-MM-DD' format.
 * @param string $endDate The end date in 'YYYY-MM-DD' format.
 * @return array An array of associative arrays with 'content' for the list content and 'permalink' for the post's URL.
 */
function fetch_lists_from_posts($startDate = '', $endDate = '') {
    $args = array(
        'posts_per_page' => -1,
        'post_type' => 'post',
        'post_status' => 'publish',
        'date_query' => array(
            array(
                'after'     => $startDate,
                'before'    => $endDate,
                'inclusive' => true,
            ),
        ),
    );

    $posts = get_posts($args);
    $lists_data = array();

    foreach ($posts as $post) {
        if (preg_match_all('/<li>(.*?)<\/li>/', $post->post_content, $matches)) {
            foreach ($matches[1] as $match) {
                $lists_data[] = array(
                    'content' => strip_tags($match),
                    'permalink' => get_permalink($post->ID)
                );
            }
        }
    }

    return $lists_data;
}

/**
 * Trigger CSV download containing the lists and their post permalinks if the download_lists_csv query parameter is set.
 *
 * @return void
 */
function download_lists_as_csv() {
    if (isset($_GET['download_lists_csv'])) {
        $startDate = isset($_GET['start_date']) ? $_GET['start_date'] : '';
        $endDate = isset($_GET['end_date']) ? $_GET['end_date'] : '';

        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="lists.csv"');

        $data = fetch_lists_from_posts($startDate, $endDate);

        $output = fopen('php://output', 'w');
        
        // Adding header row to CSV
        fputcsv($output, array("List Content", "Post URL"));

        foreach ($data as $line) {
            fputcsv($output, array($line['content'], $line['permalink']));
        }

        fclose($output);
        die();
    }
}

add_action('admin_init', 'download_lists_as_csv');

/**
 * Add a new menu item in the WordPress admin to allow downloading lists as CSV.
 *
 * @return void
 */
function lists_to_csv_menu() {
    add_menu_page('Download Lists as CSV', 'Download Lists', 'manage_options', 'download-lists-csv', 'download_lists_as_csv_page', 'dashicons-download');
}

/**
 * Display the form to choose a date range and the link to trigger the CSV download on the custom admin page.
 *
 * @return void
 */
function download_lists_as_csv_page() {
    // Check if dates are set
    $startDate = isset($_POST['start_date']) ? $_POST['start_date'] : '';
    $endDate = isset($_POST['end_date']) ? $_POST['end_date'] : '';

    echo '<form method="post" action="">';
    echo 'Start Date: <input type="date" name="start_date" value="' . esc_attr($startDate) . '">';
    echo 'End Date: <input type="date" name="end_date" value="' . esc_attr($endDate) . '">';
    echo '<input type="submit" value="Set Date Range">';
    echo '</form>';

    echo '<a href="' . admin_url('?download_lists_csv=true&start_date=' . $startDate . '&end_date=' . $endDate) . '">Download Lists as CSV</a>';
}

add_action('admin_menu', 'lists_to_csv_menu');

?>
