function startMonitoringBeacons(){
    var delegate = cordova.plugins.locationManager.Delegate();

    cordova.plugins.locationManager.setDelegate(delegate);

	// required in iOS 8+
	cordova.plugins.locationManager.requestWhenInUseAuthorization();

    for(var i = 0;i < beacons.length;i++){
        var beaconRegion = cordova.plugins.locationManager.BeaconRegion(
            beacons[i].identifier,
            beacons[i].uuid,
            beacons[i].major,
            beacons[i].minor
        );
        cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
                                    .fail(console.error)
                                    .done();
    }
    delegate.didEnterRegion = onEnterRegion;
    delegate.didExitRegion = onExitRegion;
}


function onEnterRegion(pluginResult) {
    var patient = DataAccess.GetPatientDataFromBeacon(pluginResult.region.identifier);
}
function onExitRegion(pluginResult){
    
}