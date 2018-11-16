<?php
include 'db_config.php';

function getMessages($query) {
    return mysqli_query(db_connect(),$query);
}
?>