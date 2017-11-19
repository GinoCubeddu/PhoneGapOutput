document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  $('#clickMe').on('click', function() {
    var outcome = random();
    if(outcome){
      navigator.notification.beep(1);
    } else {
      navigator.notification.beep(2);
    }
  });
}

function random() {
  return !Math.round(Math.random());
}
