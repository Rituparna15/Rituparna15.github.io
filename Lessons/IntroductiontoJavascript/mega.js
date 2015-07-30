(function()
{		
	var maindiv = document.createElement("div");
	maindiv.id = "main";
	document.body.appendChild(maindiv);
	var radiodiv = document.createElement("div");
	radiodiv.id="radio_div";
	maindiv.appendChild(radiodiv);
	var renderdiv = document.createElement("div");
	renderdiv.id="ren";
	maindiv.appendChild(renderdiv);

	var rad1 = document.createElement("input");
	rad1.type = "radio";
    rad1.name = "radio";
    rad1.id = "rad1";
    rad1.value = "r1";
    document.getElementById("radio_div").appendChild(rad1);
    //document.getElementById("rad1").addEventListener("click", Mortgage_Calculator);
    
    var rad2 = document.createElement("input");
	rad2.type = "radio";
    rad2.name = "radio";
    rad2.id = "rad2";
    rad2.value = "r2";
    document.getElementById("radio_div").appendChild(rad2);
    //document.getElementById("rad2").addEventListener("click", Date_Time_Calculator);

    var rad3 = document.createElement("input");
	rad3.type = "radio";
    rad3.name = "radio";
    rad3.id = "rad3";
    rad3.value = "r3";
    document.getElementById("radio_div").appendChild(rad3);
    //document.getElementById("rad3").addEventListener("click", Basic_Calculator);

	var objDiv = document.getElementById("radio_div");

	var TextNode1 = document.createTextNode("Mortgage Calculator");
    var TextNode2 = document.createTextNode("Date Calculator");
    var TextNode3 = document.createTextNode("Basic Calculator");
 
    var Label1 = document.createElement("label");
    Label1.htmlFor = "rad1";
    Label1.appendChild(rad1);
    Label1.appendChild(TextNode1);
 
    var Label2 = document.createElement("label");
    Label2.htmlFor = "rad2";
    Label2.appendChild(rad2);
    Label2.appendChild(TextNode2);

    var Label3 = document.createElement("label");
    Label3.htmlFor = "rad3";
    Label3.appendChild(rad3);
    Label3.appendChild(TextNode3);

    objDiv.appendChild(Label1);
    objDiv.appendChild(Label2);
    objDiv.appendChild(Label3);


	//document.getElementById('mydiv').style.fontVariant = "italic";

	function Mortgage_Calculator()
	{
		generate_table();
		function generate_table() {
	  // get the reference for the body
	  var body = document.getElementsByTagName("body")[0];
	 
	  // creates a <table> element and a <tbody> element
	  var tbl     = document.createElement("table");
	  var tblBody = document.createElement("tbody");
	 
	  // creating all cells
	  for (var i = 0; i < 2; i++) {
	    // creates a table row
	    var row = document.createElement("tr");
	 
	    for (var j = 0; j < 2; j++) {
	      // Create a <td> element and a text node, make the text
	      // node the contents of the <td>, and put the <td> at
	      // the end of the table row
	      var cell = document.createElement("td");
	      var cellText = document.createTextNode("cell in row "+i+", column "+j);
	      cell.appendChild(cellText);
	      row.appendChild(cell);
	    }
	 
	    // add the row to the end of the table body
		    tblBody.appendChild(row);
		  }
		 
		  // put the <tbody> in the <table>
		  tbl.appendChild(tblBody);
		  // appends <table> into <body>
		  body.appendChild(tbl);
		  // sets the border attribute of tbl to 2;
		  tbl.setAttribute("border", "2");
		}


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






	}
    
	function Date_Time_Calculator()
	{

		function datediff()
		{
			var d1 = document.getElementById("d1").value;
			var d2 = document.getElementById("d2").value;

			var date1 = new Date(d1);
			var date2 = new Date(d2);

			var dt1 = date1.getTime();
			var dt2 = date2.getTime();

			var ddiff = dt1 - dt2;

			var days = ddiff/(1000*60*60*24);
			var millis = ddiff;
			var sec = ddiff/1000;
			var min = ddiff/(1000*60);
			var hour = ddiff/(1000*60*60);
			document.getElementById("ans1").value = days + "days" + hour + "hours" + min + "mins" + sec + "secs";
		}

		function timediff()
		{
			var t1 = document.getElementById("t1").value;
			var t2 = document.getElementById("t2").value;
			tdiff(t1, t2); 
		}
		function tdiff(t1, t2) 
		{
		    t1 = t1.split(":");
		    t2 = t2.split(":");
		    var first = new Date(0, 0, 0, t1[0], t1[1], 0);
		    var second = new Date(0, 0, 0, t2[0], t2[1], 0);
		    var diff = first.getTime() - second.getTime();
		    var hrs = Math.floor(diff / 1000 / 60 / 60);
		    diff -= hrs * 1000 * 60 * 60;
		    var mins = Math.floor(diff / 1000 / 60);
		    if (hrs < 0)
		       hrs = -(hrs);
			document.getElementById("ans2").value = (hrs <= 9 ? "0" : "") + hrs + " hours and " + (mins <= 9 ? "0" : "") + mins + " minutes";
		}
		function timeinterval()
		{
			var t = document.getElementById("time").value;
			var i = document.getElementById("interval").value;
			tint(t, i); 
		}
		function tint(t, i)
		{
			t = t.split(":");
		    i = i.split(":");
		    var tm = new Date(0, 0, 0, t[0], t[1], 0);
		    var itvl = new Date(0, 0, 0, t[0], i[1], 0);
		    var newtime = tm.getTime() + itvl.getTime();
		    var hrs = Math.floor(newtime / 1000 / 60 / 60);
		    newtime -= hrs * 1000 * 60 * 60;
			var mins = Math.floor(newtime / 1000 / 60);
		    if(hrs > 24)
			    { 
			    	hrs = hrs - 24 ; 
			    	document.getElementById("ans3").value = (hrs <= 9 ? "0" : "") + hrs + ":" + (mins <= 9 ? "0" : "") + mins + " the next day";
			    }
			    else
			    	document.getElementById("ans3").value = (hrs <= 9 ? "0" : "") + hrs + ":" + (mins <= 9 ? "0" : "") + mins;
		}
	}

	function Basic_Calculator()
	{








	}






























})();






