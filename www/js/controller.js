document.addEventListener("deviceready", init, false);
function init() {
    console.log("DOM ready");
    startMonitoringBeacons();
}

$("#btnAddAppointment").click(function () {
    var adder = $("#appAdd");
    $(adder).find(".btn").click(function () {
        var text1 = $("#appAdd").find(".date").val();
        var text2 = $("#appAdd").find(".appointment").val();
        currentPatient.appointments.push({ date: text1, appointment: text2 });
        $("#appAdd").find(".date").val("");
        $("#appAdd").find(".appointment").val("");
        $("#appAdd").find(".btn").unbind();
        $("#appAdd").hide();
        fillPatientInfo(currentPatient);
    });
    $(this).before(adder.show());
});
$("#btnAddMedicine").click(function () {
    var adder = $("#medAdd");
    $(adder).find(".btn").click(function () {
        var text1 = $("#medAdd").find(".medicine").val();
        currentPatient.medicine.push(text1);
        $("#medAdd").find(".medicine").val("");
        $("#medAdd").find(".btn").unbind();
        $("#medAdd").hide();
        fillPatientInfo(currentPatient);
    });
    $(this).before(adder.show());
});
$("#btnAddTreatmentPlan").click(function () {
    var adder = $("#treatAdd");
    $(adder).find(".btn").click(function () {
        var text1 = $("#treatAdd").find(".treatment").val();
        currentPatient.treatments.push(text1);
        $("#treatAdd").find(".treatment").val("");
        $("#treatAdd").find(".btn").unbind();
        $("#treatAdd").hide();
        fillPatientInfo(currentPatient);
    });
    $(this).before(adder.show());
});
$("#btnAddSurgery").click(function () {
    var adder = $("#surgAdd");
    $(adder).find(".btn").click(function () {
        var text1 = $("#surgAdd").find(".surg").val();
        currentPatient.surgical_history.push(text1);
        $("#surgAdd").find(".surgAdd").val("");
        $("#surgAdd").find(".btn").unbind();
        $("#surgAdd").hide();
        fillPatientInfo(currentPatient);
    });
    $(this).before(adder.show());
});
$("#btnAddMedHistory").click(function () {
    var adder = $("#medhistAdd");
    $(adder).find(".btn").click(function () {
        var text1 = $("#medhistAdd").find(".medhist").val();
        currentPatient.mediacal_history.push(text1);

        $("#medhistAdd").find(".medhist").val("");
        $("#medhistAdd").find(".btn").unbind();
        $("#medhistAdd").hide();
        fillPatientInfo(currentPatient);
    });
    $(this).before(adder.show());
});
var currentPatient;
function fillPatientInfo(patient) {
    currentPatient = patient;
    $(':mobile-pagecontainer').pagecontainer('change', '#page-patient', { transition: 'slideup' });

    clearPatientInfo();
    $("#patientName").html("<b>" + patient.firstname + " " + patient.lastname+ "</b>");
    $("#paddress").html(patient.address);
    $("#pzipcity").html(patient.zip + ' ' + patient.city);
    $("#chief_complaint").html(patient.chief_complaint);
    $("#booldType").html("<b>BloodType:</b> " + patient.blood_type);
    $.each(patient.allergies, function (i, a) {
        $("#allergies").append("<li>" + a + "</li>");
    });

    $("#history_of_currentIllness").html(patient.history_of_present_illness);
    $.each(patient.mediacal_history, function (i, a) {
        $("#mediacal_history").append("<li>" + a + "</li>");
    });
    $.each(patient.surgical_history, function (i, a) {
        $("#surgical_history").append("<li>" + a + "</li>");
    });
    $("#social_history").html(patient.social_history);
    $.each(patient.appointments, function (i, a) {
        $("#appointments").append("<li>" + a.date + "&#9; " + a.appointment + "</li>");
    });
    $.each(patient.medicine, function (i, a) {
        $("#medicine").append("<li>" + a + "</li>");
    });
    $.each(patient.treatments, function (i, a) {
        $("#treatment_plan").append("<li>" + a + "</li>");
    });
}

function clearPatientInfo() {
    $("#patientName").empty();
    $("#paddress").empty();
    $("#pzipcity").empty();
    $("#chief_complaint").empty();
    $("#history_of_currentIllness").empty();
    $("#mediacal_history").empty();
    $("#surgical_history").empty();
    $("#booldType").empty();
    $("#allergies").empty();
    $("#appointments").empty();
    $("#medicine").empty();
    $("#treatment_plan").empty();

}
