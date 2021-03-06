(function ()
{

	function Create_element(tags, parent, attributes, el_style, el_event, label)
	{
		var element=document.Create_element(tags), 
		attrs, events, styles;

		typeof label != "undefined" && element.appendChild(document.createTextNode(label));


		if(el_event!=null)
		{
			for( events in el_event)
			element.addEventListener(events, el_event[events]);	
		}

		if(el_style!=null)
		{
			for(styles in el_style)
			element.style[styles]=el_style[styles];
		}

		if(attributes!=null)
		{	
			for(attrs in attributes)
			element.setAttribute(attrs, attributes[attrs]);
		}
		
		parent.appendChild(element);
		return element;
	}	

	var body = document.body;
	Create_element("div", body, {}, {}, {}, "");

	var maindiv = Create_element("div", body, {id:"maindiv"}, { padding:"0 0 0 30%"}, {} );
	var subdiv = Create_element("div", maindiv, {id:"subdiv"}, {width:"50%", height:"50px", padding:"2"} );

	Create_element("input", subdiv, {id:"Mortgage", type:"radio", name:"check"}, {},{click: function () {Selection(this.id)}} );
	Create_element("span",  subdiv, {undefined}, {},{}, "Mortgage Calculator");

	Create_element("input", subdiv, {id:"Datetime", type:"radio", name:"check"}, {},{click: function () {Selection(this.id)}} );
	Create_element("span",  subdiv, {}, {},{}, "Date Time Calculator");

	Create_element("input", subdiv, {id:"Basic", type:"radio", name:"check"}, {},{click: function () {Selection(this.id)}} );
	Create_element("span",  subdiv, {}, {},{}, "Basic Calculator");


	var render= Create_element("div", maindiv, {id:"render"}, { width:"45%", height:"25em"}, {});


	function Selection(id)
	 {
		
		if(id=="Datetime")
		{
		render.innerHTML="";	
	    Date_Time_Calculator();
	 	}

		if(id=="Mortgage")
		{
		Mortgage_Calculator();
		}
		if(id=="Basic")
	 	{	
	 	Basic_Calculator();
	 	}	
	}

function Date_time_Calculator()
{
		render.innerHTML="";

		var div1 = Create_element("div",   render, {id:"div1"}, {border:"1px solid", width: "100%",margin:"2%",padding:"2%"}, {});
		
		Create_element("span",  div1, {}, {}, {}, "Enter first date : ");
		Create_element("input", div1, {id:"d1", type:"text", placeholder:"Year Month Date"}, {}, {});

		Create_element("span",  div1, {}, {}, {}, "Enter second date : ");
		Create_element("input", div1, {id:"d2", type:"text", placeholder:"Year Month Date"}, {}, {});
		
		Create_element("input", div1, { type:"submit", value:"Lets Go: "}, {}, {click: function(){ datediff() }});
		Create_element("input", div1, {id:"ans1", type:"text"}, {}, {});


		var timediv = Create_element("div", render, {id:"timediv"}, {border:"1px solid", width: "100%",margin:"2%",padding:"2%"}, {});		   

		var div2 = Create_element("div", timediv, {id:"div2"}, { width: "100%"}, {});
		
		Create_element("span",  div2, {}, {}, {}, "Enter time 1 : ");
		Create_element("input", div2, {id:"t1", type:"text", placeholder:"HH:MM"}, {}, {});

		Create_element("span",  div2, {}, {}, {}, "Enter time 2 : ");
		Create_element("input", div2, {id:"t2", type:"text", placeholder:"HH:MM"}, {}, {});
		
		Create_element("input", div2, { type:"submit", value:"Lets Go: "}, {}, {click: function(){ timediff() }});
		Create_element("input", div2, {id:"ans2", type:"text"}, {}, {});

		var div3 = Create_element("div", timediv, {id:"div3"}, { width: "100%"}, {});
		
		Create_element("span",  div3, {}, {}, {}, "Enter time: ");
		Create_element("input", div3, {id:"t", type:"text", placeholder:"HH:MM"}, {}, {});

		Create_element("span",  div3, {}, {}, {}, "Enter time interval: ");
		Create_element("input", div3, {id:"i", type:"text", placeholder:"HH:MM"}, {}, {});
		
		Create_element("input", div3, { type:"submit", value:"Lets Go: "}, {}, {click: function(){ timeinterval() }});
		Create_element("input", div3, {id:"ans3", type:"text"}, {}, {});


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
	
	function Mortgage_Calculator()
	{

	render.innerHTML="";
	var div1 = Create_element("div", render, {id:"d1", width:"90%"}, {}, {});
	Create_element("span",  d1, {}, {marginRight:"20%"}, {}, "Principal: ");
	Create_element("input", d1, {type:"text", id:"P",   placeholder:"Enter the amount" }, {}, {click: function(){only_digit(e)});

	var div2 = Create_element("div", render, {id:"d2", width:"90%"}, {}, {});
	Create_element("span",  d2, {}, {marginRight:"27%"}, {}, "Rate of interest: ");
	Create_element("span",  d2, {}, {marginRight:"27%"}, {}, "Fixed at 10% (Interest rates may vary)");

	var div3 = Create_element("div", render, {id:"d3", width:"90%"}, {}, {});
	Create_element("span",  d3, {}, {}, {}, "Time (in months): ");
	Create_element("input", d3, {type:"text", id:"T",   placeholder:"Enter time in months" }, {}, {click: function(){only_digit(e)});

	var div4 = Create_element("div", render, {id:"d4", width:"90%"}, {}, {});
	Create_element("span",  d4, {}, {marginRight:"27%"}, {}, "EMI : ");
	Create_element("input", d4, {type:"text", id:"E", placeholder:"Enter the EMI" }, {}, {click: function(){only_digit(e)});

	var div5 = Create_element("div", render, {id:"d5", width:"90%"}, {}, {});
	Create_element("input", d5, {type:"submit", value:"Submit" }, {marginTop:"3%"}, {click: function(){getdata()}});
	Create_element("input", d5, {type:"reset", value:"Reset" }, {marginTop:"6%"}, {click: function(){erase()}});
	Create_element("span", d5, {id:"m"}, {}, {});

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


})()