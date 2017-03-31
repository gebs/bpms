function startMonitoringBeacons(){
    var delegate = new cordova.plugins.locationManager.Delegate();

   cordova.plugins.locationManager.setDelegate(delegate);


	// required in iOS 8+
	cordova.plugins.locationManager.requestWhenInUseAuthorization();

    for(var i = 0;i < beacons.length;i++){    
        var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(
            beacons[i].identifier,
            beacons[i].uuid,
            beacons[i].major,
            beacons[i].minor
        );
        cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
            .fail(function(e) { console.error(e); })
            .done();
    }
    delegate.didEnterRegion = onEnterRegion;
    delegate.didExitRegion = onExitRegion;
}


function onEnterRegion(pluginResult) {
    var patient = dataAccess.getPatientDataFromBeacon(pluginResult.region.identifier);
}
function onExitRegion(pluginResult){
    
}