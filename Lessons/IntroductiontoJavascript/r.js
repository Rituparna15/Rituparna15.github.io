function createRadio()
{
        var objDiv = document.getElementById("radioDiv");
         
        var radioItem1 = document.createElement("input");
        radioItem1.type = "radio";
        radioItem1.name = "radioGrp";
        radioItem1.id = "rad1";
        radioItem1.value = "myradio1";
 
        radioItem1.defaultChecked = true; 
        radioItem1.checked = true;
 
        var radioItem2 = document.createElement("input");
        radioItem2.type = "radio";
        radioItem2.name = "radioGrp";
        radioItem2.id = "rad2";
        radioItem2.value = "myradio2";
 
        var objTextNode1 = document.createTextNode("Radio1");
        var objTextNode2 = document.createTextNode("Radio2");
 
       /*var objLabel = document.createElement("label");
        objLabel.htmlFor = radioItem1.id;
        objLabel.appendChild(radioItem1);
        objLabel.appendChild(objTextNode1);
 
        var objLabel2 = document.createElement("label");
        objLabel2.htmlFor = radioItem2.id;
        objLabel2.appendChild(radioItem2);
        objLabel2.appendChild(objTextNode2);
         
 
        objDiv.appendChild(objLabel);
        objDiv.appendChild(objLabel2);*/
 
}