<?php
/*
Plugin Name: Lists to CSV
Description: Extracts all ordered and unordered lists from posts and exports to CSV.
Version: 1.0
Author: @ash1eygrace
*/

/**
 * Fetch lists (both ordered and unordered) from all posts.
 *
 * @return array An array containing the content of list items.
 */
function fetch_lists_from_posts() {
    $args = array(
        'posts_per_page' => -1,  // Fetch all posts.
        'post_type' => 'post',
        'post_status' => 'publish',
    );

    $posts = get_posts($args);
    $lists_data = array();

    foreach ($posts as $post) {
        if (preg_match_all('/<li>(.*?)<\/li>/', $post->post_content, $matches)) {
            foreach ($matches[1] as $match) {
                $lists_data[] = strip_tags($match);
            }
        }
    }

    return $lists_data;
}

/**
 * Trigger CSV download containing the lists if the download_lists_csv query parameter is set.
 *
 * @return void
 */
function download_lists_as_csv() {
    if (isset($_GET['download_lists_csv'])) {
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="lists.csv"');

        $data = fetch_lists_from_posts();

        $output = fopen('php://output', 'w');
        foreach ($data as $line) {
            fputcsv($output, array($line));
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
 * Display the link to trigger the CSV download on the custom admin page.
 *
 * @return void
 */
function download_lists_as_csv_page() {
    echo '<a href="' . admin_url('?download_lists_csv=true') . '">Download Lists as CSV</a>';
}

add_action('admin_menu', 'lists_to_csv_menu');

?>
