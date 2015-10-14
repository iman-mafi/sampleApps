$(document).ready(function() {

  var addAllergens = function(num1, num2) {
    return num1 + num2;
  }

  $('button').on('click', function() {
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    if (num1 || num2 == "") {
      $('#result').text(num1 + num2).show('slow');
      $('.fade').show('slow');
    } else {
      alert("Can't be blank..");
    }

    parseInt($('#num1').val(" "));
    parseInt($('#num2').val(" "));
  });

});