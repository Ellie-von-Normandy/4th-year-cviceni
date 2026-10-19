<?php

class Post {

    private $conn;

    public function __construct($conn) {
        $this->conn = $conn;
    }

    function createPost() {
        $stmt = $this->conn->prepare("insert into post (name, text_post, author) values (:name, :text_post, :author)");
        $stmt->bindvalue("name", "$name");
        $stmt->bindvalue("textPost", "$textPost");
        $stmt->bindvalue("author", "$author");

        $stmt->execute();
    }

    function getAllPost() {
        $stmt = $this->conn->prepare("SELECT * FROM post");
        $stmt->execute();
        return $stmt->fetchAll();
    }
}