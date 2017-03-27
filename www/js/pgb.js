function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}


function BusinessCard() {

	info =  'Roman Yurkevych' + '\n' +
	        'romuriy@gmail.com' + '\n' +
	        'www.cemoe.com' + '\n' +
	        'KrDUIs1012' + '\n' +
			'Applied Informatics UEK' + '\n';

	navigator.notification.alert(info);
	
}



var myContact = navigator.contacts.create({"displayName": "Test User"});


function onSuccess(contacts) {
    alert('Found ' + contacts.length + ' contacts.');
};
 
function onError(contactError) {
    alert('onError!');
};
 
// find all contacts with 'Bob' in any name field 
var options      = new ContactFindOptions();
options.filter   = "Влад";
options.multiple = true;
options.desiredFields = [navigator.contacts.fieldType.id];
options.hasPhoneNumber = true;
var fields       = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
