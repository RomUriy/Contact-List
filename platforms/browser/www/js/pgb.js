function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}



function onDeviceReady() {
navigator.notification.beep(1);
}

function onSuccess(contacts) {
    for (var i = 0; i < contacts.length; i++) {
        alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
            "Family Name: "  + contacts[i].name.familyName      + "\n" +
            "Given Name: "   + contacts[i].name.givenName       + "\n" +
            "Middle Name: "  + contacts[i].name.middleName);
    }
};

function onError(contactError) {
	alert('onError!');
};


function myinfo() {

	var options = new ContactFindOptions();
	options.filter = "Yurkevych";
	options.multiple = true;
	filter = ["displayName", "name"];
	navigator.contacts.find(filter, onSuccess, onError, options);

}