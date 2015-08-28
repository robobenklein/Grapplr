<?php
$email = $_POST['email'];
$password = $_POST['password'];
if($name&&$password){
    $connect = mysql_connect("localhost", "root", "") or die("Connection error");
    mysql_select_db("user") or die("Could not locate database");
}
?>

