<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Ritu";
 		// Create connection
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	// Check connection
	if (!$conn) {
	    die("Connection failed: ".mysqli_connect_error());
	}
	$data = "UPDATE Details SET name='$_GET[name]', email='$_GET[email]', country='$_GET[country]', phn_no=$_GET[phone], gender='$_GET[gender]' WHERE email='$_GET[email]' ";
 	mysqli_query($conn, $data);
?>