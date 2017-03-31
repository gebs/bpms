document.addEventListener("deviceready",init,false);
function init(){
    console.log("DOM ready");
    startMonitoringBeacons();
    fillPatientInfo(patients[0]);
}

function fillPatientInfo(patient){
    clearPatientInfo();
    $("#paddress").val(patient.address);
    $("#pzipcity").val(patient.zip + ' ' +patient.city);
    $("#chief_complaint").val(patient.chief_complaint);
    $("#history_of_currentIllness").val(patient.history_of_present_illness);
    $.each(patient.mediacal_history,function(i,a){
        $("#mediacal_history").append("<li>" + a+ "</li>");
    });
    $.each(patient.surgical_history,function(i,a){
        $("#surgical_history").append("<li>" + a+ "</li>");
    });
    $("#social_history").val(patient.social_history);
}

function clearPatientInfo(){
    $("#paddress").empty();
    $("#pzipcity").empty();
    $("#chief_complaint").empty();
    $("#history_of_currentIllness").empty();
    $("#mediacal_history").empty();
    $("#surgical_history").empty();
    $("#social_history").empty();
}