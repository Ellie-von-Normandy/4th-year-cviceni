<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $name = ($_POST['post_name']);
    $postText = ($_POST['post_text']);
    $author = ($_POST['author']);

    $post->createPost($name, $postText, $author);

}