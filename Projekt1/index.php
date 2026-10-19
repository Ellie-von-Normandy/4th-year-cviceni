<?php

require_once "post.class.php";
require_once "connect.php";

$post = new Post($conn);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<form action="" method="post">
    <label for="post-name">Název</label>
    <input type="text" name="post-name" id="post-name" required>

    <label for="post-text">Příspěvek</label>
    <textarea name="post-text" id="post-text" cols="30" rows="10"></textarea>

    <label for="author">Auhor</label>
    <input type="text" name="author" id="author" required>

    <input type="submit" name="submit" id="submit">
</form>
<main>

    <?php $allPosts = $post->getAllPost(); ?>
    <?php foreach ($allPosts as $post) : ?>
        <article>
            <h2><?php echo $p[name></h2>
            <p>Text</p>
            <p>Autor</p>
            <small>Čas</small>
        </article>
    <php end foreach; ?>
</main>

</body>
</html>