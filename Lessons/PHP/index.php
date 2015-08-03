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

    function ajaxfunc(){
      name = document.getElementById("name").value;
      email = document.getElementById("email").value;
      country = document.getElementById("country").value;
      if(document.getElementById("states1").selected)
      {
        state = document.getElementById("states1").value;
      }
      else
      {
        state = document.getElementById("state2").value;
      }
      phone = document.getElementById("phone").value;
      if(document.getElementById("rad2").checked)
      {
        gender = "male";
      }
      else if(document.getElementById("rad1").checked)
      {
        gender = "female";
      }
      var interest = document.getElementsByName("interests[]");
      for(var i = 0 ; i<interest.length; i++){
        if(interest[i].checked)
          interest += interest[i].value+ ",";
      }
      var datastring ="?name="+name+"&country="+country+"&email="+email+"&state="+state+"&phone="+phone+"&sex="+gender+"&interest="+interest;
      var xmlhttp;
      if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
      }
      else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange =function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
          document.getElementById("message").innerHTML=xmlhttp.responseText;
          
        }
      }
      xmlhttp.open("GET","validatation.php" + datastring, true);
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
                      <option id = "c1" value = "India">India</option>
                      <option id = "c2" value = "USA" >USA</option>
                      </select>
                    </td> 
                    <td><select id="states1" name="state">
                      <option> - Select - </option>
                        <option id="jnk" value="J & K" >J & K</option>
                        <option id="raj" value="RAJASTHAN" >Rajasthan</option>
                      </select>

                      <select  id="states2" style="visibility: hidden" name="state">
                        <option> - Select - </option>
                        <option id="ny" value="New York" >New York</option>
                        <option id="sf" value="San Francisco" >San Francisco</option>
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
                    <td><input id = "phone" type = "text" name = "phone">
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