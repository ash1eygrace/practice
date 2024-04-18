<?php
/*
Plugin Name: Export Posts to CSV
Description: Exports posts to a CSV file with Title, Content, Permalink, Categories, Publish Date, and Status.
Version: 1.0
Author: ash1eygrace
*/

/**
 * Registers a custom menu page in the WordPress admin.
 */
function custom_posts_exporter_admin_menu() {
    add_menu_page('Export Posts to CSV', 'Export Posts', 'manage_options', 'custom-export-posts', 'custom_posts_exporter_page');
}

add_action('admin_menu', 'custom_posts_exporter_admin_menu');

/**
 * Outputs the HTML for the plugin's settings page.
 */

function custom_posts_exporter_page() {
    ?>
    <div class="wrap">
        <h2>Export Posts to CSV</h2>
        <form method="post" action="">
            <!-- Nonce field for security -->
            <?php wp_nonce_field('export_csv', 'export_csv_nonce'); ?>

            <!-- Date range fields -->
            <input type="date" name="start_date" />
            <input type="date" name="end_date" />

            <!-- Category selection -->
            <select name="category" id="category">
                <option value="">All Categories</option>
                <?php 
                $categories = get_categories();
                foreach ($categories as $category) {
                    echo '<option value="' . esc_attr($category->term_id) . '">' . esc_html($category->name) . '</option>';
                }
                ?>
            </select>

            <!-- Export button -->
            <input type="submit" name="export_csv" value="Export Posts" />
        </form>
    </div>
    <?php
}

/**
 * Generates a CSV file from an array of WP_Post objects and sends it to the browser for download.
 *
 * @param WP_Post[] $posts Array of WP_Post objects to be included in the CSV.
 * @return void
 */
function generate_csv($posts) {
    // Check if we have posts to export
    if (empty($posts)) {
        return false;
    }

    // Define the filename for the export
    $filename = 'posts-export-' . date('Ymd') . '.csv';

    // Set the headers to force download
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=' . $filename);

    // Create a file pointer connected to the output stream
    $output = fopen('php://output', 'w');

    // Output the column headings
    fputcsv($output, array('Title', 'Content', 'Permalink', 'Categories', 'Publish Date', 'Status'));

    // Loop over the posts and output the data
    foreach ($posts as $post) {
        $categories = get_the_category($post->ID);
        $category_list = join(', ', wp_list_pluck($categories, 'cat_name'));

        fputcsv($output, array(
            $post->post_title,
            $post->post_content,
            get_permalink($post->ID),
            $category_list,
            $post->post_date,
            $post->post_status
        ));
    }

    // Close the file pointer
    fclose($output);
}

/**
 * Retrieves an array of WP_Post objects based on specified date range and category filters.
 *
 * @param string $start_date The start date for the post query.
 * @param string $end_date The end date for the post query.
 * @param int|string $category The category ID to filter posts. An empty string indicates no category filter.
 * @return WP_Post[] Array of WP_Post objects that match the query.
 */
function get_filtered_posts($start_date, $end_date, $category) {
    // Set up the arguments for the query
    $args = array(
        'date_query' => array(
            'after'     => $start_date,
            'before'    => $end_date,
            'inclusive' => true,
        ),
        'category' => $category,
        'posts_per_page' => -1, // Retrieve all posts
    );

    // Execute the query
    $query = new WP_Query($args);

    // Return the posts
    return $query->posts;
}

/**
 * Handles the CSV export action. It checks for POST request, verifies nonce for security,
 * retrieves the filtered posts based on input from the settings page, and initiates the CSV download.
 *
 * @return void
 */
function handle_csv_export() {
    if (isset($_POST['export_csv']) && check_admin_referer('export_csv', 'export_csv_nonce')) {
        $start_date = sanitize_text_field($_POST['start_date']);
        $end_date = sanitize_text_field($_POST['end_date']);
        $category = intval($_POST['category']);

        $posts = get_filtered_posts($start_date, $end_date, $category);
        generate_csv($posts);
        exit;
    }
}

add_action('admin_init', 'handle_csv_export');
