window.onload=function(){
	var para=document.createElement("p");
	var testdiv=document.getElementById("testdiv");
	testdiv.appendChild(para);
	var txt=document.createTextNode("Hello,how are you?");
	para.appendChild(txt);
}
window.onload=function(){
	var para=document.createElement("p");
	var txt1=document.createTextNode("This is ");
	para.appendChild(txt1);
	var emphasis=document.createElement("em");
	var txt2=document.createTextNode("my");
	para.appendChild(emphasis);
	emphasis.appendChild(txt2);
	var txt3=document.createTextNode(" content.");
	para.appendChild(txt3);
	var testdiv=document.getElementById("testdiv");
	testdiv.appendChild(para);
}