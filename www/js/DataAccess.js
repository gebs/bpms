var dataAccess = {
    getPatientDataFromBeacon : function(beaconid){
        var bed_id = 0;
        var patient;
        $.each(beacons,function(i,a){
           if (a.identifier == beaconid){
               bed_id = a.bed_id;
           }
        });
        $.each(patients,function(i,a){
            if (a.bed_id == bed_id){
                patient = a;
            }
        });
        return patient;
    }

}