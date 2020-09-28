<?php
$con = mysqli_connect("localhost","root","","ciat");

$id_user = $_POST['id-user'];

$sql = "DELETE FROM users where id = '$id_user' ";

if (mysqli_query($con, $sql)) {
    echo "User Delete";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}
mysqli_close($con);
?>