function to_json()
{	
	var details=
	{
		"Name": "",
		"Sex" : "",
		"Email": "",
		"Address" : "",
		"Country" : "",
		"Interest" : ""
	};

	if(document.getElementsByName("name").value!= "" && document.getElementsByName("email").value!= "" && document.getElementsByName("address").value!= "" && document.getElementsByName("country").value!= "") 
	{	
		details.Name = document.getElementsByName("name").value,
		details.Email = document.getElementsByName("email").value,
		details.Address = document.getElementsByName("address").value,
		details.Country = document.getElementsByName("country").value
	}
	else
	{
		alert("Fields empty!!");
	}
	if(document.getElementsByName("sex").value!= "" && document.getElementsByName("interest").value!= "") 
  	{
		var interest = document.getElementsByName("interest");
		var len1 = interest.length;
		for(var i = 0; i < len1; i++)
		{
			if ( interest[i].checked ) 
			{
			   details.Interest = interest[i].value;
	  		}
		}
		var sex = document.getElementsByName('sex');
		var len2 = sex.length;
		for (var i = 0; i < len2; i++) 
		{
		    if (sex[i].checked) 
		    {        
		       details.Sex = sex[i].value;
		    }
		}
	}
	else
	{
		alert("Fields empty!!");
	}
	console.log("User details as specified -->  ");
	console.log(JSON.stringify(details));
 }

to_json();