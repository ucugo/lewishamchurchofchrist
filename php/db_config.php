<?php
static $connection;

function db_connect() {

    if(!isset($connection)) {
        $config = parse_ini_file('config.ini');
        $connection = mysqli_connect($config['server'],$config['username'],$config['password'],$config['dbname']);
        mysqli_set_charset($connection, "utf8");
    }
    if($connection === false) {
        echo "Connection error";
        return mysqli_error($connection);
    }
    return $connection;
}
?>