<html>
<head>
  <title> PHP Assignment </title>
  <link rel="stylesheet" type="text/css" href="style.css"/> </link>
</head>
<body>
  <script>
    function clear() {
      document.getElementById("form2").reset();
    }

  function ajaxfc()
   {
      var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("message").innerHTML=xmlhttp.responseText;
        }
      }

    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var address=document.getElementById("address").value;
    var country=document.getElementById("country").value;
    if(document.getElementById("male").checked){
        sex=document.getElementById("male").value;
      }
      else{
        sex=document.getElementById("female").value;
      }
    var interest=document.getElementById("interest[]").value;
    var phone=document.getElementById("phone").value;
    var datastring="?name="+name+"&email="+email+"&address="+address+"&country="+country+"&sex="+sex+"&interest="+interest+"&phone="+phone;
    console.log(datastring);
    xmlhttp.open("GET","validation.php"+datastring,true);
    xmlhttp.send(null);

    }
    </script>

  <div id = "message">
  </div>
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
              <form action='#' id="form2" method='post' name="form2">
                <table class= "table">
                  <tr>
                    <td>Name </td> 
                    <td><input type = "text" id = "name">
                    </td>
                    <td>Country </td> 
                    <td><select id="country" name="country" onchange="stateChange(this);" required>
                      <option> - select - </option>
                      <option value = "India">India</option>
                      <option value = "USA" >USA</option>
                    </select>
                    </td> 
                  </tr> 
                  <tr>
                    <td>Email </td> 
                    <td><input type = "text" id = "email" name = "email">
                    </td>
                    <td> Address </td>
                    <td> <input id = "address" name = "address">
                    </td>
                  </tr>    
                  <tr>
                    <td>Sex</td>
                    <td><input id = "rad1" type = "radio" name = "sex" value= "female"/> Female
                        <input id = "rad2" type = "radio" name = "sex" value= "male" />Male
                    </td>
                  <tr>
                    <td>Interest</td> <td><input type = "checkbox" id = "interest[]" name = "interest[]" value= "football"/>Football
                                <input  type = "checkbox" name = "interest" />Movie
                                <input type = "checkbox" name = "interest"  value= "reading" />Reading
                    </td>
                    <td>Phone +91</td>
                    <td><input id = "phone" type = "text" name = "phone" value = "<?php echo $phone;?>" >
                  </tr>
                </table>
                <button id ="button2" type = "submit" value = "Submit" onclick="ajaxfunc()">SUBSCRIBE</button>
                <button id ="button3" type = "reset" value ="Reset" onclick="clear()" >RESET</button>
              </form>
          </div>
        </div>
      </div> 
    </div>
  </div>
 </body>
</html>