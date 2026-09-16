<?php

require_once "init.php";
/* @var Database $conn */ /* IDE mi podtrhavalo $conn, funguje i bez */

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $titulek  = trim($_POST['titulek'] ?? '');
    $obsah    = trim($_POST['obsah'] ?? '');

    if (!empty($username) && !empty($titulek) && !empty($obsah)) {

        $user = $conn->query("SELECT id FROM user WHERE username = ?", [$username]);

        if (!empty($user)) {

            $userId = $user[0]['id'];

        } else {

            $conn->query("INSERT INTO user (username, email, password) VALUES (?, ?, ?)", [
                    $username,
                    $username . "@forum.local",
                    "guest_no_login"
            ]);

            $userId = $conn->getLastInsertId();

        }

        $conn->query("INSERT INTO prispevek (user_id, titulek, obsah) VALUES (?, ?, ?)", [
                $userId,
                $titulek,
                $obsah
        ]);

        header("Location: " . $_SERVER['PHP_SELF']);
        exit;
    }
}

$sql = "SELECT u.username, p.titulek, p.obsah, p.vytvoreno FROM prispevek p JOIN user u ON p.user_id = u.id ORDER BY p.vytvoreno DESC;";

$prispevky = $conn->query($sql);

?>

<div style="padding: 20px">

    <div class="pinned-form">

        <form method="POST">

            <div>
                <input type="text" name="username" placeholder="Zadejte přezdívku..." required>
            </div>

            <div>
                <input type="text" name="titulek" placeholder="Zadejte název..." required>
            </div>

            <div>
                <textarea name="obsah" rows="2" placeholder="Napište text..." required></textarea>
            </div>

            <button type="submit">Odeslat příspěvek</button>

        </form>

    </div>

    <div class="posts-container">

        <?php foreach ($prispevky as $prispevek) { ?>

            <div class="post-card">

                <p style="margin: 0 0 8px 0;">
                    <strong><?= htmlspecialchars($prispevek['username']) ?>:</strong>
                    <?= htmlspecialchars($prispevek['titulek']) ?>
                </p>

                <p style="margin: 0;"><?= htmlspecialchars($prispevek['obsah']) ?></p>

            </div>

        <?php } ?>

    </div>

</div>

<style>
    * {
        box-sizing: border-box;
        background-color: black;
        font-family: monospace, sans-serif;
    }

    p {
        color: cyan;
        text-shadow: 0 0 10px cyan;
    }

    .pinned-form {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        background-color: #000;
        border: 2px solid cyan;
        box-shadow: 0 0 15px cyan;
        padding: 15px;
        z-index: 1000;
    }

    .pinned-form form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input[type="text"], textarea {
        width: 100%;
        padding: 8px;
        margin: 0;
        border: 1px solid cyan;
        background-color: #000;
        color: cyan;
        box-shadow: inset 0 0 5px cyan;
        outline: none;
        resize: vertical;
    }

    button {
        background-color: #000;
        color: cyan;
        border: 1px solid cyan;
        padding: 8px 16px;
        cursor: pointer;
        box-shadow: 0 0 5px cyan;
        text-shadow: 0 0 5px cyan;
        font-weight: bold;
        width: 100%;
        margin: 0;
    }

    button:hover {
        background-color: cyan;
        color: black;
        text-shadow: none;
    }

    .posts-container {
        margin-top: 236px;
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 30px;
    }

    .post-card {
        border: 1px solid cyan;
        margin: 20px 0;
        padding: 10px;
        box-shadow: 0 0 5px cyan;
    }

    strong {
        color: mediumorchid;
    }

</style>