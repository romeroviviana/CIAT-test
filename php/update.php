<?php
include 'connection.php';

$id = $_POST['id'];

$select = mysqli_query($con, "SELECT * FROM users WHERE id = '$id'");

while($dat=mysqli_fetch_assoc($select)) {
    $arr[] = $dat;
}
echo json_encode($arr);
?>