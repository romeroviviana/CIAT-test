<?php
include 'connection.php';

$select = mysqli_query($con, "select * from users");

while($dat=mysqli_fetch_assoc($select)) {
    $arr[] = $dat;
}
echo json_encode($arr);
?>