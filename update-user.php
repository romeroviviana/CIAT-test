<?php
$con = mysqli_connect("localhost","root","","ciat");

$id_user = $_POST['id-user'];
$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$username = $_POST['username'];
$email = $_POST['email'];
$role = $_POST['role-update'];
$active = $_POST['active'];

$sql = "UPDATE users SET 
    first_name = '$first_name', 
    last_name = '$last_name',
    nameuser = '$username', 
    email = '$email',
    role = '$role',
    active = '$active' where id = '$id_user' ";

if (mysqli_query($con, $sql)) {
    echo "Update user";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}
mysqli_close($con);
?>