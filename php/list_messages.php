<?php
include 'db_query.php';

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $msgs = getMessages("select * from church");
    echo json_encode(mysqli_fetch_array ($msgs));
}
