<html>
<head>
  <title> PHP Assignment </title>
  <link rel="stylesheet" type="text/css" href="style.css"/> </link>
</head>
<body>
  <script>
  function clear() {
    document.getElementById("form1").reset();
  }
  </script>

<?php
// define variables and set to empty values
$nameErr = $emailErr = $sexErr = $addressErr = $interestErr = $phoneErr = $countryErr = "";
$name = $email = $sex = $address = $interest = $phone = $country = "";
$count = 0;
//$reg = '/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/';

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    if (empty($_POST["name"])) {
     $nameErr = "Name is required";
    } 
    else if (!preg_match( "/^[a-zA-Z ]*$/", $name)) // check if name only contains letters and whitespace 
     {
       $nameErr = "Only letters and whitespace allowed"; 
      }
    else {
      $name = test_input($_POST["name"]);
      $count ++;
    }

    if (empty($_POST["email"])) {
     $emailErr = "Email is required";
    } 
    else if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {// check if e-mail address is well-formed
        $email = test_input($_POST["email"]);
        $count ++;
    }
    else {
        $emailErr = "Invalid email format"; 
      }

    if (empty($_POST["address"])) {
      $addressErr = "Address is required";
    } 
    else {
     $address = test_input($_POST["address"]);
     $count ++;
    }

    if (empty($_POST["sex"])) {
      $sexErr = "Gender is required";
    } 
    else {
      $sex = test_input($_POST["sex"]);
      $count ++;
    }

    if (empty($_POST["interest"])) {
      $interestErr = "Interests are required";
    } 
    else {
      $interest = test_input($_POST["interest"]);
      $count ++;
    }

    /*if (empty($_POST["country"])) {
      $countryErr = "Country is required";
    }
    else if ($country === "- select -")
    {
      $countryErr = "Choose a country!";
    } */

    if(!isset($_POST["country"])) 
    {
      $countryErr = "Country is required!";
    }
    else {
      $country = test_input($_POST["country"]);
      $count ++;
    }
    if (empty($_POST["phone"])) {
      $phoneErr = "Phone no is required";
    } 
    else {
          if(strlen($phone) == 10) {
            $phone = test_input($_POST["phone"]);
            $count ++;
          }
          else {
            $phoneErr = "Phone no is invalid";
          }
        }
}

function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}


if($count == 7)
{ print "Successfully validated all fields!";

$myfile = fopen("Rituparna15.github.io/Review/PHP/data.csv", "a");
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
  <div class="tabs">
      <div class="tab">
        <input type="radio" id="tab-1" name="tab-group-1" checked>
        <label for="tab-1">  News  </label>
        <div class="content">
          <div id="leftdiv">
            <p class="heading"> Welcome </p>
            <p class="htext1"> Simple and effective Angular JS bindings for FusionCharts JavaScript Charting Library. Simple and effective Angular JS bindings for FusionCharts JavaScript Charting Library.</p>
            <p class="htext2">Angular JS bindings for Fusioncharts JS Charting library. </p>
          </div>
          <div id="rightdiv">
              <p class="heading2">Latest News</p>
              <img src="image.jpg" alt="Tim Cook" style="width:340px; height:190px;">
          </div>
              <button type="button" id="button1" >LEARN MORE</button>
        </div>   
      </div>
      <div class="tab">
        <input type="radio" id="tab-2" name="tab-group-1">
        <label for="tab-2">Subscribe</label>
        <div class="content">
          <div id="subdiv">  
              <p><span class="error"> *Required fields </span></p>
              <form id = "form1" method = "post" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>"> 
                <table class= "table">
                  <tr>
                    <td>Name </td> 
                    <td><input type = "text" name = "name" value = "<?php echo $name;?>" >
                    <span class="error"> * <?php echo $nameErr;?></span> 
                    </td>
                    <td>Country </td> 
                    <td><select id="country" name="country" value = "<?php echo $country;?>" onchange="stateChange(this);" required>
                      <option> - select - </option>
                      <option value = "India" <?php if($country == "India") {echo "selected";} ?>>India</option>
                      <option value = "USA"  <?php if($country == "USA") {echo "selected";} ?>>USA</option>
                      <!--<option value="UK">United Kingdom</option>
                      <option value="USA">USA</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Afganistan">Afghanistan</option>
                      <option value="India">India</option>-->
                    </select>
                    <span class="error"> * <?php echo $countryErr;?> </span>
                    </td> 
                  </tr> 
                  <tr>
                    <td>Email </td> 
                    <td><input type = "text" name = "email" value="<?php echo $email;?>">
                    <span class="error"> * <?php echo $emailErr;?></span>
                    </td>
                    <td> Address </td>
                    <td> <input id = "address" name = "address" value = "<?php echo $address;?>">
                    <span class="error"> * <?php echo $addressErr;?> </span>
                    </td>
                  </tr>    
                  <tr>
                    <td>Sex</td>
                    <td><input id = "rad1" type = "radio" name = "sex" <?php if (isset($sex) && $sex =="female") echo "checked";?> value= "female"/> Female
                        <input id = "rad2" type = "radio" name = "sex" <?php if (isset($sex) && $sex=="male") echo "checked";?> value= "male" />Male
                        <span class="error"> * <?php echo $sexErr;?></span>
                    </td>
                  <tr>
                    <td>Interest</td> <td><input type = "checkbox" name = "interest" <?php if (isset($interest) && $interest =="football") echo "checked";?> value= "football"/>Football
                                <input  type = "checkbox" name = "interest" <?php if (isset($interest) && $interest =="movie") echo "checked";?> value= "movie" />Movie
                                <input type = "checkbox" name = "interest" <?php if (isset($interest) && $interest =="reading") echo "checked";?> value= "reading" />Reading
                      <span class="error"> * <?php echo $interestErr;?></span>
                    </td>
                    <td>Phone +91</td>
                    <td><input type = "text" name = "phone" value = "<?php echo $phone;?>" >
                      <span class="error"> * <?php echo $phoneErr;?></span> </td>
                  </tr>
                </table>
                <button id ="button2" type = "submit" value = "Submit">SUBSCRIBE</button>
                <button id ="button3" type = "reset" value ="Reset" onclick="clear()" >RESET</button>
              </form>
          </div>
        </div>
      </div> 
    </div>
  </div>
</body>
</html>