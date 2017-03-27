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