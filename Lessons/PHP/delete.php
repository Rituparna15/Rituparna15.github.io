<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "Ritu";
	$data = "UPDATE Details SET name=$_POST[$name], email=$_POST[$email], country=$_POST[$country], phone=$_POST[$phone], gender=$_POST[$gender] WHERE email=$_POST[$email]";
	mysql_query($data);
	if (!$conn) {
    	die("Connection failed: ".mysqli_connect_error());
	}
	$del = "DELETE FROM Ritu where email=$email";
  	if( mysqli_query($conn, $del ) ){
      	$dql="DELETE from Interests where email=$email";
  		mysqli_query($conn, $dql );
    }
?>