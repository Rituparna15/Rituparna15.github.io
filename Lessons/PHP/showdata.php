<html>
<head>
  <title> Show data </title>
</head>
<body>
<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Ritu";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
     if( mysqli_num_rows( $result )==0 ){
       echo '<tr><td colspan="4">No Rows Returned</td></tr>';
     }
     else{
       while( $row = mysqli_fetch_assoc( $result ) ){
         echo "<tr><td>{$row['Name']}</td><td>{$row['Email']}</td><td>{$row['Phone']}</td><td>{$row['Country']}</td>
         <td>{$row['State']}</td><td>{$row['Address']}</td><td>{$row['Gender']}</td><td><a href='#'?id='{$row['Phone']}'>Delete</a></td><td><a href='#'?id='{$row['Phone']}'>Edit</a></td></tr>\n";
       }
     }
   }
   mysqli_close($conn);
 }
   ?>
 </body>
 </html>