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


if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
   if (empty($_POST["name"])) {
     $nameErr = "Name is required";
     $count = 0;
   } else {
     $name = test_input($_POST["name"]);
     // check if name only contains letters and whitespace
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = "Only letters and whitespace allowed"; 
       $count = 1;
     }
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "Email is required";
     $count = 0;
   } else {
     $email = test_input($_POST["email"]);
     // check if e-mail address is well-formed
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "Invalid email format"; 
       $count = 1;
     }
   }
   
   if (empty($_POST["address"])) {
     $addressErr = "Address is required";
     $count = 0;
   } else {
     $address = test_input($_POST["address"]);
     $count = 1;
   }

   if (empty($_POST["sex"])) {
     $sexErr = "Gender is required";
     $count = 0;
   } else {
     $sex = test_input($_POST["sex"]);
     $count = 1;
   }

   if (empty($_POST["interest"])) {
     $interestErr = "Interests are required";
     $count = 0;
   } else {
     $interest = test_input($_POST["interest"]);
     $count = 1;
   }

   if (empty($_POST["country"])) {
     $countryErr = "Country is required";
     $count = 0;
   } else {
     $country = test_input($_POST["country"]);
     $count = 1;
   }

  if (empty($_POST["phone"])) {
     $phoneErr = "Phone no is required";
     $count = 0;
   } else {
     if (preg_match('/(0[0-9]{9})/', $phone))
     {
     $phone = test_input($_POST["phone"]);
     $count = 1;
     }
    else
      $phoneErr = "Phone number is invalid";
    }
}
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}


if($count ==1)
{ print "Successfully validated all fields!";

$myfile = fopen("/opt/lampp/htdocs/Ritu/Form.csv", "a");
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
            <p class="heading">Welcome</p>
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
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire">Bonaire</option>
                      <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Canary Islands">Canary Islands</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Channel Islands">Channel Islands</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos Island">Cocos Island</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote DIvoire">Cote D'Ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curaco">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Ter">French Southern Ter</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Great Britain">Great Britain</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea North">Korea North</option>
                      <option value="Korea Sout">Korea South</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macau">Macau</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Midway Islands">Midway Islands</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Nambia">Nambia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherland Antilles">Netherland Antilles</option>
                      <option value="Netherlands">Netherlands (Holland, Europe)</option>
                      <option value="Nevis">Nevis</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau Island">Palau Island</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Phillipines">Philippines</option>
                      <option value="Pitcairn Island">Pitcairn Island</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Republic of Montenegro">Republic of Montenegro</option>
                      <option value="Republic of Serbia">Republic of Serbia</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="St Barthelemy">St Barthelemy</option>
                      <option value="St Eustatius">St Eustatius</option>
                      <option value="St Helena">St Helena</option>
                      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                      <option value="St Lucia">St Lucia</option>
                      <option value="St Maarten">St Maarten</option>
                      <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                      <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                      <option value="Saipan">Saipan</option>
                      <option value="Samoa">Samoa</option>
                      <option value="Samoa American">Samoa American</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Tahiti">Tahiti</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Erimates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States of America">United States of America</option>
                      <option value="Uraguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City State">Vatican City State</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                      <option value="Wake Island">Wake Island</option>
                      <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zaire">Zaire</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option> 
                    -->
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