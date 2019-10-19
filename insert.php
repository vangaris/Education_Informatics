<?php
$servername = "localhost";
$username = "id5846116_cvdimitrisaris";
$password = "admin1234";
$dbname = "id5846116_physics";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// prepare and bind
$stmt = $conn->prepare("INSERT INTO physics (name, faculty, email, password, phone) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssi", $name, $faculty, $email, $password, $phone);

// set parameters and execute
$name = $_POST['name'];
$faculty = $_POST['faculty'];
$email = $_POST['email'];
$password = $_POST['password'];
$phone = $_POST['phone'];
$stmt->execute();


// header('Location: main.html');
echo "<script>alert('Login successfully');
    window.location.href='main.html'
    </script>";


$stmt->close();
$conn->close();
?>