<?php

require_once "connector.php";

define('DB_HOST', "127.0.0.1");
define('DB_USER', "root");
define('DB_PASS', "");
define('DB_NAME', "mydb");

global $conn;

$conn = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if (!$conn) {
    die("Database connection failed.");
}

session_start();

if (isset($_SESSION['user_id'])) {
    $now = time();
    $expire_time = 90 * 60;

    if (isset($_SESSION['last_activity']) && ($now - $_SESSION['last_activity'] > $expire_time)) {
        session_unset();
        session_destroy();
        header("Location: pc_main.php");
        exit;
    }

    $_SESSION['last_activity'] = $now;
}

set_exception_handler(function ($e) {
    error_log($e->getMessage());
    echo "Chyba: " . $e->getMessage();
    echo "<br>Soubor: " . $e->getFile();
    echo "<br>Řádek: " . $e->getLine();
});

function e($value) {
    return htmlspecialchars(isset($value) ? $value : '', ENT_QUOTES, 'UTF-8');
}