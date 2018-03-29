document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
function connectionType() {
 var  networkConnectionType =  navigator.network.connection.type;
        alert('Connection Type: ' +  networkConnectionType );
}

function onBatteryStatus(status) {
    console.log(device.platform+"|"+device.manufacturer+"|"+device.uuid);
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
}
connectionType();
onBatteryStatus(status);
}
