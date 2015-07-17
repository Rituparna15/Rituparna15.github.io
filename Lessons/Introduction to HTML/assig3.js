
function to_json()
{	
	var details=
	{
		"Name": "",
		"Sex" : "",
		"Phone":"",
		"Email": "",
		"Address" : "",
		"Country" : "",
		"Interest" : ""
	};

	if(document.getElementsByName("phone")[0].value!= "" && document.getElementsByName("name")[0].value!= "" && document.getElementsByName("email")[0].value!= "" && document.getElementsByName("address")[0].value!= "" && document.getElementsByName("country").value!= "") 
	{	
		details.Name = document.getElementsByName("name")[0].value,
		details.Email = document.getElementsByName("email")[0].value,
		details.Phone = document.getElementsByName("phone")[0].value
		details.Address = document.getElementsByName("address")[0].value,
		details.Country = document.getElementsByName("country")[0].value,
	}
	else
	{
		alert("Fields empty!!");
	}
	if(document.getElementsByName("sex")[0].value!= "" && document.getElementsByName("interest")[0].value!= "") 
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

function ph_validator()
{
	var ph = details.Phone;
	var array = [];
	var count = 0, x=0 ;
	do
	{
		x = ph%10;
		array.push(x);
		ph = ph/10;
		count = count++;
	}
	while(ph>0);

	if(count==10)
	{
		if(array[count-1]!=9||array[count-1]!=8||array[count-1]!=7)
			{
				alert("Phone number is not a valid Indian number. Please enter again.");
			}
		else{
				alert("Phone number is valid!");
			}
	}
	else
	{
		alert("Phone number does not contain 10 digits. Please enter again.")
	}

}

ph_validator;



















