function createElement(tagName, parentElement, attrList, styleObj, eventObj, label)
	{
		var element=document.createElement(tagName), 
		attrName, eventName, styleName;

		typeof label != "undefined" && element.appendChild(document.createTextNode(label));

		for(attrName in attrList)
		{
		    //var value = attrList[attrName];
			element.setAttribute(attrName, attrList[attrName]);
		
		}

		if(eventObj!=null)
		{
			for( eventName in eventObj)
			element.addEventListener(eventName, eventObj[eventName]);	
		}


		if(styleObj!=null)
		{
			for(styleName in styleObj)
			element.style[styleName]=styleObj[styleName];
		}
		


		parentElement.appendChild(element);
		
		return element;
	}	


createElement("div", body, {id:"aaaa", xyz: "bbb"}, {backgroundColor:"red",width:"200px", height: "300px"}, {click: function () {console.log("aa")}, hover: function(){console.log("bbb")}}, "Suvradip")

createElement("input", body, {id:"basicCalc", type:"radio", name:"selectors"}, {},{click: function () {renderEvent(this.id)}} );
	createElement("span",  block, {}, {},{}, "Basic Calculator");