<?php
/* 
Plugin Name: Book Reviews Custom Post Type
Description: Adds a custom post type for Book Reviews.
Author: ash1eygrace
Version: 1.0 
*/

function book_reviews_custom_post_type() {
    register_post_type('book_reviews', array(
        'public' => true,
        'show_in_rest' => true,
        'labels' => array(
            'name' => 'Books',
            'singular_name' => 'Book',
            'add_new_item' => 'Add New Book',
            'edit_item' => 'Edit Book',
            'add_new' => 'Add New Book',
            'view_item' => 'View Book',
            'view_items' => 'View Books',
            'search_items' => 'Search Books',
            'not_found' => 'No books found',
            'not_found_in_trash' => 'No books found in Trash',
            'all_items' => 'All Books',
            'archives' => 'Book Archives',
            'attributes' => 'Book Attributes'
        ),
        'menu_icon' => 'dashicons-book',
        'has_archive' => true,
        'rewrite' => array('slug' => 'books'),
        'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments')
    ));
}

add_action('init', 'book_reviews_custom_post_type');