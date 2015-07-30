(function ()
{
	function createElement(tags, parent, attributes, el_style, el_event, label)
	{
		var element = document.createElement(tags), 
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
	createElement("div", body, {}, {}, {}, "");

	var maindiv = createElement("div", body, {id:"maindiv"}, { padding:"0 0 0 30%"}, {} );
	var subdiv = createElement("div", maindiv, {id:"subdiv"}, {width:"50%", height:"50px", padding:"2"} );

	createElement("input", subdiv, {id:"Mortgage", type:"radio", name:"check"}, {},{click: function () {Selection(this.id)}} );
	createElement("span",  subdiv, {undefined}, {},{}, "Mortgage Calculator");

	createElement("input", subdiv, {id:"Datetime", type:"radio", name:"check"}, {},{click: function () {Selection(this.id)}} );
	createElement("span",  subdiv, {}, {},{}, "Date Time Calculator");

	createElement("input", subdiv, {id:"Basic", type:"radio", name:"check"}, {},{click: function () {Selection(this.id)}} );
	createElement("span",  subdiv, {}, {},{}, "Basic Calculator");


	var render= createElement("div", maindiv, {id:"render"}, { width : "65%", height : "500px"}, {});


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

function Date_Time_Calculator()
{
		render.innerHTML="";

		var div1 = createElement("div", render, {id:"div1"}, {border:"1px solid blue", width: "35%",margin:"2%",padding:"2%"}, {});
		
		createElement("span",  div1, {}, {}, {}, "Enter first date : ");
		createElement("input", div1, {id:"d1", type:"text", placeholder:"Year Month Date"}, {}, {});

		createElement("span",  div1, {}, {}, {}, "Enter second date : ");
		createElement("input", div1, {id:"d2", type:"text", placeholder:"Year Month Date"}, {}, {});
		
		createElement("input", div1, { type:"submit", value:"Calculate: "}, {}, {click: function(){ datediff() }});
		createElement("input", div1, {id:"ans1", type:"text"}, {}, {});


		var timediv = createElement("div", render, {id:"timediv"}, {border:"1px solid blue", width: "35%",margin:"2%",padding:"2%"}, {});		   

		var div2 = createElement("div", timediv, {id:"div2"}, { width: "100%"}, {});
		
		createElement("span",  div2, {}, {}, {}, "Enter time 1 : ");
		createElement("input", div2, {id:"t1", type:"text", placeholder:"HH:MM"}, {}, {});

		createElement("span",  div2, {}, {}, {}, "Enter time 2 : ");
		createElement("input", div2, {id:"t2", type:"text", placeholder:"HH:MM"}, {}, {});
		
		createElement("input", div2, { type:"submit", value:"Calculate: "}, {}, {click: function(){ timediff() }});
		createElement("input", div2, {id:"ans2", type:"text"}, {}, {});

		var div3 = createElement("div", timediv, {id:"div3"}, { width: "100%"}, {});
		
		createElement("span",  div3, {}, {}, {}, "Enter time: ");
		createElement("input", div3, {id:"t", type:"text", placeholder:"HH:MM"}, {}, {});

		createElement("span",  div3, {}, {}, {}, "Enter time interval: ");
		createElement("input", div3, {id:"i", type:"text", placeholder:"HH:MM"}, {}, {});
		
		createElement("input", div3, { type:"submit", value:"Calculate: "}, {}, {click: function(){ timeinterval() }});
		createElement("input", div3, {id:"ans3", type:"text"}, {}, {});


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
	var div1 = createElement("div", render, {id:"d1", width:"90%"}, {}, {});
	createElement("span",  d1, {}, {marginRight:"27%"}, {}, "Principal: ");
	createElement("input", d1, {type:"text", id:"P",   placeholder:"Enter the amount" }, {}, {click: function(){only_digit(e)}});

	var div2 = createElement("div", render, {id:"d2", width:"90%"}, {}, {});
	createElement("span",  d2, {}, {marginRight:"20%"}, {}, "Rate of interest: ");
	createElement("span",  d2, {}, {}, {}, "Fixed at 10% (Interest rates may vary)");

	var div3 = createElement("div", render, {id:"d3", width:"90%"}, {}, {});
	createElement("span",  d3, {}, {marginRight:"18%"}, {}, "Time (in months): ");
	createElement("input", d3, {type:"text", id:"T",   placeholder:"Enter time in months" }, {}, {click: function(){only_digit(e)}});

	var div4 = createElement("div", render, {id:"d4", width:"90%"}, {}, {});
	createElement("span",  d4, {}, {marginRight:"31%"}, {}, "EMI : ");
	createElement("input", d4, {type:"text", id:"E", placeholder:"Enter the EMI" }, {}, {click: function(){only_digit(e)}});

	var div5 = createElement("div", render, {id:"d5", width:"90%"}, {}, {});
	createElement("input", d5, {type:"submit", value:"Submit" }, {marginTop:"3%", marginRight:"10%"}, {click: function(){getdata()}});
	createElement("input", d5, {type:"reset", value:"Reset" }, {marginTop:"3%"}, {click: function(){erase()}});
	createElement("span", d5, {id:"m"}, {}, {});

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

	function Basic_Calculator()
	{
		render.innerHTML = "";
		createElement("span", render, {id:"mem_text"}, {position: "absolute", fontSize: "10px", visibility: "hidden"}, {}, "M");
	   	createElement("input", render, {type:"text", id:"display", placeholder:"0" }, {border: "10px solid #80CCE6", width:"28 em", height:"6 em", textAlign:"right"},{}); 

	    var buttontable = createElement("table", render, {id:"buttontable"}, {border: "10px solid #80CCE6", width: "11em", height: "200px"}, {});	
	   

		function insertbutton(condition, row, data, blabel, operation)
		{
			if(condition) {
		    	createElement("tr", buttontable, {id:row}, {}, {});
			}
		    var td = document.createElement("td");
		    createElement("input", td, {type:"submit", value: blabel}, {width: "10 em", height: "9 em", background: "#94FFDB", borderRadius: "5px", border: "1px solid blue", outline:"none", cursor: "pointer" }, {click: function () {operation(this)}});
		    document.getElementById(row).appendChild(td);
		}

		var point = true;
		var memory = 0;

	    insertbutton(true,  0, 1, "MC", memory_ops);
	    insertbutton(false, 0, 2, "M+", memory_ops);
	    insertbutton(false, 0, 3, "M-", memory_ops);
	    insertbutton(false, 0, 4, "MR", memory_ops);

	    insertbutton(true,  1, 1, "CLS", clear);
	    insertbutton(false, 1, 2, "CAN", cancel);
	    insertbutton(false, 1, 3, "R", buttons_ops);
	    insertbutton(false, 1, 2, "%", buttons_ops);

	    insertbutton(true,  2, 1, "7", buttons_ops);
	    insertbutton(false, 2, 2, "8", buttons_ops);
	    insertbutton(false, 2, 3, "9", buttons_ops);
	    insertbutton(false, 2, 2, "+", buttons_ops);

	    insertbutton(true,  3, 1, "4", buttons_ops);
	    insertbutton(false, 3, 2, "5", buttons_ops);
	    insertbutton(false, 3, 3, "6", buttons_ops);
	    insertbutton(false, 3, 4, "-", buttons_ops);

	    insertbutton(true,  4, 1, "1", buttons_ops);
	    insertbutton(false, 4, 2, "2", buttons_ops);
	    insertbutton(false, 4, 3, "3", buttons_ops);
	    insertbutton(false, 4, 4, "*", buttons_ops);

	    insertbutton(true,  5, 1, ".", buttons_ops);
	    insertbutton(false, 5, 2, "0", buttons_ops);
	    insertbutton(false, 5, 3, "=", result);
	    insertbutton(false, 5, 4, "/", buttons_ops);

	    function result()
		{
			var data_entry= document.getElementById('display').value+"$";
			var digits = [];
			var operator = [];
			for(var i = 0; i < data_entry.length; i++)
			{
				if(data_entry[i] == "+" ||data_entry[i] == "-"||data_entry[i] == "*"||data_entry[i] == "/"||data_entry[i] ==  "%"||data_entry[i] == "R" ||data_entry[i] == "$" )
	            	operator.push(data_entry[i]);
	        	else
	        		digits.push(data_entry[i]);
	        }
	        i=0;
	        if( operator[i] == "+" ) {
		    	document.getElementById('display').value = add(digits);
		    }
		    else if(operator[i] == "-" )  {
		    	document.getElementById('display').value = sub(digits);
		    }
		    else if(operator[i] == "*" )  {
		    	document.getElementById('display').value = mul(digits);
		    }
		    else if(operator[i] == "/" )  {
		    	document.getElementById('display').value = div(digits);
		    }
		    else if(operator[i] == "%" )  {
		    	document.getElementById('display').value = percent(digits);
		    }
		    else if(operator[i] =="R")  {
		    	document.getElementById('display').value = rem(digits);
		    }
		}
		

	    function memory_ops(op)
		{
		  var dis = document.getElementById('display').value;
		  var m = document.getElementById('mem_text');

		      if(op.value == "M+")
		      {
		         memory += parseFloat(dis);
		         m.style.visibility = "visible";
		      }

		      else if(op.value == "M-")
		      {
		        memory -= parseFloat(dis);
		        m.style.visibility = "visible";
		      }
		      else if(op.value == "MC")
		      {
		        memory=0;
		        m.style.visibility = "hidden";
		      }
		      else if(op.value == "MR")
		      {
		       document.getElementById('display').value = memory;
		       m.style.visibility = "visible";
		      }

		}
		function buttons_ops(bid)
		{
			if(bid.value == ".")
			{
			  if(point)
			  {
			  document.getElementById('display').value += bid.value;
			  point=false;
			  }
			}
			else
			{
			  if(bid.value=="+" || bid.value=="-" || bid.value=="*" || bid.value=="/")
			  {
			    point=true;
			  }
			  document.getElementById('display').value+=bid.value;
			}
		}

		
		function clear()
		{
			var clear=document.getElementById('display');
			clear.value="";
		}

		function cancel()
		{
		 var can=document.getElementById('display').value;
		document.getElementById('display').value=t.substring(0,t.length -1);
		}
		function add(digits)
		{
		    var sum = 0;
		    for(var i = 0; i < digits.length; i++)
		    {
		       sum += parseInt(digits[i]);
		    }

		    return sum;
		}
		function sub(digits)
		{
		   var diff, count=0;
		    for(var i = 0; i < digits.length; i++)
		    {
		       if( count != 0 )
		       {
		            diff-=digits[i];
		       }else
		       {
		         count = 1;
		         diff = digits[i];
		       }

		    }
			return diff;
		}
		function mul(digits)
		{
		   var mul=1;
		    for(var i=0; i < digits.length; i++)
		    {
		       mul *= digits[i];
		    }
			return mul;
		}
		function div(digits)
		{
		   var q, count=0;
		    for(var i=0; i < digits.length; i++)
		    {
		       if(count!=0)
		       {
		            q /= digits[i];
		       }else
		       {
		         count = 1;
		         q = digits[i];
		       }

		    }
		    return q;
		}
		function rem(digits)
		{
		 var rem;
		 if( digits[0] > digits[1] )
		 	rem = digits[0] % digits[1];
		 else
		 	rem = "Unable to compute" ;
		return rem;
		}
		function percent(digits)
		{	
		  var per = digits[0]/100;
		  return per;
		}
		
	}
	}


)();