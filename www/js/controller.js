document.addEventListener("deviceready",init,false);
function init(){
    console.log("DOM ready");
    startMonitoringBeacons();
}