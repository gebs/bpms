document.addEventListener("deviceready",init,false);
function init(){
    console.log("DOM ready");
    startMonitoringBeacons();
    setTimeout(function(){
fillPatientInfo(patients[0]);

},5000); 
    
}

function fillPatientInfo(patient){

    $(':mobile-pagecontainer').pagecontainer('change', '#page-patient', {transition: 'slideup'});

    clearPatientInfo();
    $("#paddress").html(patient.address);
    $("#pzipcity").html(patient.zip + ' ' +patient.city);
    $("#chief_complaint").html(patient.chief_complaint);
    $("#booldType").html("<b>BloodType:</b> " + patient.blood_type);
     $.each(patient.allergies,function(i,a){
        $("#allergies").append("<li>" + a+ "</li>");
    });
    
    $("#history_of_currentIllness").html(patient.history_of_present_illness);
    $.each(patient.mediacal_history,function(i,a){
        $("#mediacal_history").append("<li>" + a+ "</li>");
    });
    $.each(patient.surgical_history,function(i,a){
        $("#surgical_history").append("<li>" + a+ "</li>");
    });
    $("#social_history").html(patient.social_history);
    $.each(patient.appointments,function(i,a){
        $("#appointments").append("<li>" + a.date + "&#9; " +a.appointment +"</li>");
    });
}

function clearPatientInfo(){
    $("#paddress").empty();
    $("#pzipcity").empty();
    $("#chief_complaint").empty();
    $("#history_of_currentIllness").empty();
    $("#mediacal_history").empty();
    $("#surgical_history").empty();
    $("#booldType").empty();
    $("#allergies").empty();
    $("#appointments").empty();
    
}
