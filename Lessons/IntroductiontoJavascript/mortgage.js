function getdata()
{
	var p = document.getElementById("P").value;
	var e = document.getElementById("E").value;
	var t = document.getElementById("T").value;
	var r = 10/1200;
	calculator(p, e, r, t);
}

function calculator(p, e, r, t)
{

	if(r.length!=0 && t.length!=0 && e.length!=0)
	{
		document.getElementById('P').value = Math.round(e * ((Math.pow(1+r,t))-1)/(r*(Math.pow((1+r),t)))); 
		document.getElementById("m").value = "Calculation successful!";
	}
	else if(p.length!=0 && t.length!=0 && r.length!=0)
	{
		document.getElementById('E').value= Math.round(p * r * Math.pow((1+r),t)/ ((Math.pow((1+r),t))-1));
		document.getElementById("m").value = "Calculation successful!";
	}
	else if(p.length!=0 && r.length!=0 && e.length!=0)
	{
		document.getElementById('T').value = Math.round((Math.log((e)/(e-(p*r))))/(Math.log(1+r))); 
		document.getElementById("m").value = "Calculation successful!";
	}
	else
	{
		alert(" * Error! Please fill in any two required fields!");	
		document.getElementById("m").value = "Inputs insufficient!";
	}

}
function erase()
{
	document.getElementById("P").value = "";
	document.getElementById("E").value = "";
	document.getElementById("T").value = "";
	document.getElementById("m").value = "";
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