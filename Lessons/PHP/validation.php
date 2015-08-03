 <?php
  // define variables and set to empty values
  $name = $email = $sex = $address = $interest = $phone = $country = $count = "";
  $count = 0;

  if (empty($_POST["name"]))
       {echo "Name is required";
        $count = 1;}
      else{
       $name = test_input($_POST["name"]);
       // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
        echo "Only letters and whitespace allowed"; 
        $count = 1;
       }
     }
     
     if (empty($_POST["email"])) {
       echo "Email is required";
       $count = 1;
      } 
      else {
       $email = test_input($_POST["email"]);
       // check if e-mail address is well-formed
       if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
         {echo "Invalid email format"; 
         $count = 1;}
       }
     }
     
     if (empty($_POST["address"])) {
       echo "Address is required";
       $count= 1;
     } else {
       $address = test_input($_POST["address"]);
     }

     if (empty($_POST["sex"])) {
        echo "Gender is required";
        $count = 1;
     } else {
       $sex = test_input($_POST["sex"]);
     }

     if (empty($_POST["interest"])) {
       echo "Interests are required";
       $count = 1;
     } else {
       $interest = test_input($_POST["interest"]);
     }

     if (empty($_POST["country"])) {
       echo "Country is required";
       $count = 1;
     } else {
       $country = test_input($_POST["country"]);
     }

     if ( strlen($_POST["phone"]) != 10 ){
       echo "Check the phone number entered"; 
       $count =1; }
        else
       $phone = test_input($_POST["phone"]);


  function test_input($data) {
     $data = trim($data);
     $data = stripslashes($data);
     $data = htmlspecialchars($data);
     return $data;
  }

  if($count ===1)
  { echo "Successfully validated all fields!";

    $myfile = fopen("/home/Rituparna15.github.io/Lessons/PHP/form2.csv", "a");
            fwrite($myfile, $name."\n");
            fwrite($myfile, $email."\n");
            fwrite($myfile, $country."\n");
            fwrite($myfile, $phone."\n");
            fwrite($myfile, $sex."\n");
            fwrite($myfile, $address."\n");
            fwrite($myfile, implode(" ", $interest)."\n");
            fclose($myfile);
  }
?> 