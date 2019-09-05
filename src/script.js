//adding svg shape in IE
var sAgent = window.navigator.userAgent;
var Idx = sAgent.indexOf("MSIE");

function addClassToIE() {
	var body = document.body;
	if ((Idx > 0) || (!!navigator.userAgent.match(/Trident\/7\./)))  {
		body.classList.add("class-for-ie");
	}
	else {
		console.log("It's not IE");
	}
};

addClassToIE();
