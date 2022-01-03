document.addEventListener("keydown", function myFunction(event) {
 
  var x = event.key; 
   
  document.getElementById("demo").innerHTML = x; //prints the value of the x variable

  switch(event.key) {
	    
		  case '1':
		  alert('NK nafta');
	    break;
	
		  case '2':
			text = 'prtisnu si dva modeu';
			break;
			
			case '3':
			window.location.href = "tel:+41774182129";
			break;
			
			case '4':
			text = 'prtisnu si stiri modeu';
			break;
			
			case '5':
			text = 'prtisnu si pet modeu';
			break;
			
			case '6':
			text = 'prtisnu si sest modeu';
			break;
			
			case '7':
			text = 'prtisnu si sedem modeu';
			break;
			
			case '8':
			text = 'prtisnu si osem modeu';
			break;
			
			case '9':
			text = 'prtisnu si devet modeu';
			break;
			
	default:              // action if an event isn't stated in "case/break" above
		alert('press 1-9')
	}
	document.getElementById("demo2").innerHTML = text;
})







//window.location.href = "tel:+375292771265";  //pozovi
//window.location.href = "sms:+375292771265?body=Hello from Appery.io!"; //poslji sms

/*
// pull contacts

document.addEventListener("deviceready", init, false);
function init() {

	navigator.contacts.find(
		[navigator.contacts.fieldType.displayName],
		gotContacts,
		errorHandler);

}

function errorHandler(e) {
	console.log("errorHandler: "+e);
}

function gotContacts(c) {
	console.log("gotContacts, number of results "+c.length);
	for(var i=0, len=c.length; i<len; i++) {
		console.dir(c[i]);
	}
}
*/
