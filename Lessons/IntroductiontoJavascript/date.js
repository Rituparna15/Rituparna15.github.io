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