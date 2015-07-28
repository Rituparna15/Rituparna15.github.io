(function()
{
  var maindiv = document.createElement("div");
  maindiv.id = "main_a";
  document.body.appendChild(maindiv);
  
})();

function create_add(id) 
{
  document.getElementById("main_a").innerHTML="";
  var maindiv = document.createElement("div");
  maindiv.id = "main_a";
  document.body.appendChild(maindiv);
  for(var i = 0; i < 20; i++) 
  {
    var divs = document.createElement("div");                
    divs.className = "blocks";
    divs.id = "div"+i;
    maindiv.appendChild(divs); 
    //if(id=="add")
    add(divs.id, i);
    //else if(id=="sub")
    //sub(divs.id,i);      
  }
}
function create_sub(id) 
{
  document.getElementById("main_a").innerHTML="";
  var maindiv = document.createElement("div");
  maindiv.id = "main_a";
  document.body.appendChild(maindiv);
 for(var i = 0; i < 20; i++) 
  {
    var divs = document.createElement("div");                
    divs.className = "blocks";
    divs.id = "sdiv"+i;
    maindiv.appendChild(divs); 
    //if(id=="add")
    //add(divs.id, i);
    //else if(id=="sub")
    sub(divs.id,i);      
  }
}


function add(id, i)
{
  var x = Math.floor((Math.random() * 100) + 1);
  var y = Math.floor((Math.random() * 100) + 1);
  var z = x + y;
  var ansid= "a" + i;
  document.getElementById(id).innerHTML=x+"</br>"+"+"+y+"</br><div><input type= \"text\" class= \"textbox\" id= \""+ansid+"\" onkeypress=\"return only_digit(event);cursor(event)\" onclick=\"ans_validator(this.value, "+z+", this)\"></div>";
 }

 function sub(id, i)
{
  var x = Math.floor((Math.random() * 100) + 1);
  var y = Math.floor((Math.random() * 100) + 1);
  if(x > y)
    {
      var z = x - y;
    }
  else
    {
      var temp = x;
      x = y;
      y=temp;
      var z = x - y;
    }
  var ansid= "s" + i;
  document.getElementById(id).innerHTML=x+"</br>"+"-"+y+"</br><div><input type= \"text\" class= \"textbox\" id= \""+ansid+"\" onkeypress=\"return only_digit(event);cursor(event)\" onclick=\"ans_validator(this.value, "+z+", this)\"></div>";
 }

function only_digit(e) 
{
    e = (e) ? e : window.event;
     
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) 
    {
        return false;
    }
    return true;

}

function cursor(e)
{
  if(e.setSelectionRange) 
    {
      e.setSelectionRange(0, 0);
    }
}

function ans_validator(ans, z, ansid)
{
   if(ans == z)
  {
    ansid.style.backgroundColor="green";
  }
  else
  {
    ansid.style.backgroundColor="red";
  }
}