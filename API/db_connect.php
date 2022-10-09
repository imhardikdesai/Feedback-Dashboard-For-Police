<?php

// Server name must be localhost
$servername = "localhost";
// $servername = "127.0.0.1";

// In my case, user name will be root
$username = "root";

// Password is empty
$password = "";
$db = "police_db";

// Creating a connection
$conn = new mysqli($servername,
			$username, $password,$db);


			// Check connection
if ($conn->connect_error) {
	die("Connection failed: " . $conn->connect_error);
  }
  // echo "Connected successfully";
  ?>
  