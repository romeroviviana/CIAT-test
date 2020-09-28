<?php
$con = mysqli_connect("localhost","root","","ciat");

$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$username = $_POST['username'];
$email = $_POST['email'];
$role = $_POST['role'];
$active = $_POST['active'];

$sql = "INSERT INTO users (first_name, last_name, nameuser, email,role,active) VALUES ('$first_name','$last_name','$username','$email','$role','$active')";

if (mysqli_query($con, $sql)) {
    echo "Add new user";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}
mysqli_close($con);
?>