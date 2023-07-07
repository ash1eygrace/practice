<!-- 
Learning to interact with the WP Datbase
Gist: https://gist.github.com/jonathanbossenger/d96520acd6225ea969f091752a3bca8b
Video: https://wordpress.tv/2023/06/23/the-wordpress-database/
 -->

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Learn WordPress Database</title>
</head>
<body style="margin: 2em;">
	<h1>Learn WordPress Database</h1>
	<div>

	<?php
	// Load the WordPress library.
	require_once __DIR__ . '/wp-load.php';

    // Get's post by ID and returns post content
    // https://developer.wordpress.org/reference/functions/get_post/
    //
    // $my_post_id = 2;
    // $the_post = get_post($my_post_id);
    
    // if ($the_post instanceof WP_post) {
    //     echo '<p>' . $the_post->post_content . '</p>';
    // } else {
    //     echo 'post not found.';
    // }


    // Create comment
    // 
    // $newcomment = array(
    //     'comment_post_ID' => 2,
    //     'comment_author' => 'John Doe',
    //     'comment_author_email' => 'a@a.com',
    //     'comment_content' => 'Hello this is a test comment inserted into the DB using wp_insert_comment()',
    // );
    // 
    // https://developer.wordpress.org/reference/functions/wp_insert_comment/
    // wp_insert_comment($newcomment);

    // https://developer.wordpress.org/reference/functions/get_comment/ 
    // $comments = get_comments();
    // foreach ($comments as $comment) {
    //     echo '<p>' . $comment->comment_content . '</p>';
    // }
    

    // get options 
    // https://developer.wordpress.org/reference/functions/get_option/
    // $options = get_option('siteurl');
    // echo '<p>' . $options . '</p>';  


    // $wpdb->query()
    // $wpdb->insert()
    // https://learn.wordpress.org/tutorial/introduction-to-securely-developing-plugins/
    // https://learn.wordpress.org/tutorial/extending-wordpress-common-security-vulnerabilities/
    
    //https://github.com/wordpress/learn 
    ?>
	</div>

</body>