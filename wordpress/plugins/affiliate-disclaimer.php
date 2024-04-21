<?php
/*
Plugin Name: Affiliate Disclaimer
Plugin URI: http://ash1eygrace.com
Description: Adds an affiliate disclaimer to the top of your posts.
Version: 1.0
Author: ash1eygrace
Author URI: http://ash1eygrace.com
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

function affiliate_disclaimer_add_admin_menu() {
    add_options_page('Affiliate Disclaimer', 'Affiliate Disclaimer', 'manage_options', 'affiliate_disclaimer', 'affiliate_disclaimer_options_page');
}

add_action('admin_menu', 'affiliate_disclaimer_add_admin_menu');

function affiliate_disclaimer_settings_init() {
    register_setting('pluginPage', 'affiliate_disclaimer_settings');

    add_settings_section(
        'affiliate_disclaimer_pluginPage_section',
        __('Your section description', 'wordpress'),
        'affiliate_disclaimer_settings_section_callback',
        'pluginPage'
    );

    add_settings_field(
        'affiliate_disclaimer_text',
        __('Select Disclaimer', 'wordpress'),
        'affiliate_disclaimer_text_render',
        'pluginPage',
        'affiliate_disclaimer_pluginPage_section'
    );
    add_settings_field(
        'affiliate_disclaimer_page',
        __('Select Disclaimer Page', 'wordpress'),
        'affiliate_disclaimer_page_render',
        'pluginPage',
        'affiliate_disclaimer_pluginPage_section'
    );
    add_settings_field(
        'affiliate_disclaimer_text_size',
        __('Disclaimer Text Size', 'wordpress'),
        'affiliate_disclaimer_text_size_render',
        'pluginPage',
        'affiliate_disclaimer_pluginPage_section'
    );
    add_settings_field(
        'affiliate_disclaimer_background_color',
        __('Background Color', 'wordpress'),
        'affiliate_disclaimer_background_color_render',
        'pluginPage',
        'affiliate_disclaimer_pluginPage_section'
    );
    add_settings_field(
        'affiliate_disclaimer_padding',
        __('Padding', 'wordpress'),
        'affiliate_disclaimer_padding_render',
        'pluginPage',
        'affiliate_disclaimer_pluginPage_section'
    );
}

add_action('admin_init', 'affiliate_disclaimer_settings_init');

function affiliate_disclaimer_text_render() {
    $options = get_option('affiliate_disclaimer_settings');
    ?>
    <label>
        <input type='radio' name='affiliate_disclaimer_settings[affiliate_disclaimer_text]' <?php checked(isset($options['affiliate_disclaimer_text']) && $options['affiliate_disclaimer_text'] == 'option1'); ?> value='option1'>
        This blog uses affiliate links and if you click external links I may earn a small commission.
    </label><br>
    <label>
        <input type='radio' name='affiliate_disclaimer_settings[affiliate_disclaimer_text]' <?php checked(isset($options['affiliate_disclaimer_text']) && $options['affiliate_disclaimer_text'] == 'option2'); ?> value='option2'>
        This blog may earn a commission if you click on affiliate links.
    </label>
    <?php
}

function affiliate_disclaimer_text_size_render() {
    $options = get_option('affiliate_disclaimer_settings');
    ?>
    <input type='text' name='affiliate_disclaimer_settings[affiliate_disclaimer_text_size]' value='<?php echo $options['affiliate_disclaimer_text_size']; ?>' placeholder="e.g., 16px">
    <?php
}

function affiliate_disclaimer_background_color_render() {
    $options = get_option('affiliate_disclaimer_settings');
    ?>
    <input type='text' name='affiliate_disclaimer_settings[affiliate_disclaimer_background_color]' value='<?php echo $options['affiliate_disclaimer_background_color']; ?>' placeholder="e.g., #ffffff">
    <?php
}

function affiliate_disclaimer_padding_render() {
    $options = get_option('affiliate_disclaimer_settings');
    ?>
    <input type='text' name='affiliate_disclaimer_settings[affiliate_disclaimer_padding]' value='<?php echo $options['affiliate_disclaimer_padding']; ?>' placeholder="e.g., 10px">
    <?php
}

function affiliate_disclaimer_page_render() {
    $options = get_option('affiliate_disclaimer_settings');
    $pages = get_pages();
    echo '<select name="affiliate_disclaimer_settings[affiliate_disclaimer_page]">';
    foreach ($pages as $page) {
        $selected = ($options['affiliate_disclaimer_page'] == $page->ID) ? 'selected' : '';
        echo '<option value="' . $page->ID . '" ' . $selected . '>' . $page->post_title . '</option>';
    }
    echo '</select>';
}

function affiliate_disclaimer_settings_section_callback() {
    echo __('Choose your settings below', 'wordpress');
}

function affiliate_disclaimer_options_page() {
    ?>
    <form action='options.php' method='post'>

        <h2>Affiliate Disclaimer</h2>

        <?php
        settings_fields('pluginPage');
        do_settings_sections('pluginPage');
        submit_button();
        ?>

    </form>
    <?php
}

function affiliate_disclaimer_add_to_content($content) {
    if (is_single()) {
        $options = get_option('affiliate_disclaimer_settings');

        // Define the actual disclaimer texts
        $disclaimer_texts = [
            'option1' => 'This blog uses affiliate links and if you click external links I may earn a small commission.',
            'option2' => 'This blog may earn a commission if you click on affiliate links.'
        ];

        // Get the selected disclaimer text by the saved option value
        $selected_disclaimer_option = isset($options['affiliate_disclaimer_text']) ? $options['affiliate_disclaimer_text'] : '';
        $disclaimer_text = isset($disclaimer_texts[$selected_disclaimer_option]) ? $disclaimer_texts[$selected_disclaimer_option] : 'Please configure your affiliate disclaimer settings.';

        // Style attributes
        $text_size = !empty($options['affiliate_disclaimer_text_size']) ? $options['affiliate_disclaimer_text_size'] : '16px';
        $background_color = !empty($options['affiliate_disclaimer_background_color']) ? $options['affiliate_disclaimer_background_color'] : '#f5f5f5'; // Changed default color for better visibility
        $padding = !empty($options['affiliate_disclaimer_padding']) ? $options['affiliate_disclaimer_padding'] : '10px';

        // Construct the style string
        $style = "style='font-size: $text_size; background-color: $background_color; padding: $padding;'";

        // Get the permalink for the selected disclaimer page
        $disclaimer_page_id = $options['affiliate_disclaimer_page'];
        $disclaimer_page_link = get_permalink($disclaimer_page_id);
        
        // Construct the full disclaimer HTML
        $disclaimer_full_text = "<div class='affiliate-disclaimer' $style>" . $disclaimer_text . " <a href='" . esc_url($disclaimer_page_link) . "' target='_blank' rel='noopener noreferrer'>Disclaimer</a></div>";

        // Return the content with the disclaimer prepended
        return $disclaimer_full_text . $content;
    }
    return $content;
}

add_filter('the_content', 'affiliate_disclaimer_add_to_content');


add_filter('the_content', 'affiliate_disclaimer_add_to_content');