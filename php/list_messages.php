<?php
include 'db_query.php';

if($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = getMessages("select * from church");

    if($data) {
        $result_data = array();
        $count = 0;
        while($row = mysqli_fetch_assoc($data)){
            $result_data[$count++] = $row;
        }
        echo json_encode($result_data);
    }
}
