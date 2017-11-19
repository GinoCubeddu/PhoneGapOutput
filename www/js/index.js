$("document").ready(function() {
  $('#clickMe').on('click', function() {
    alert("Ouch! You clicked me!");
  });

  function random() {
    return !Math.round(Math.random());
  }
});
