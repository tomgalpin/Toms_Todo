$(document).ready(function(){

  var remove_active = function() {
    $('#week div').removeClass('active');
  };

  // var add_active = function() {
  //   $.addClass('active');
  // };

  var change_weekday = function(day) {
    $('#week').removeClass().addClass(day);
  };

  // var click_day = function(day) {
  //   $('#day').on('click', function() {
  //     change_weekday('day');
  //     remove_active();
  //     $('#day').addClass('active');
  //   });
  // };

  ///////////////////////////////////////////

  $('#monday').on('click', function() {
    change_weekday('monday');
    remove_active();
    $('#monday').addClass('active');
  });

  $('#tuesday').on('click', function() {
    change_weekday('tuesday');
    remove_active();
    $('#tuesday').addClass('active');
  });

  $('#wednesday').on('click', function() {
    change_weekday('wednesday');
    remove_active();
    $('#wednesday').addClass('active');
  });

  $('#thursday').on('click', function() {
    change_weekday('thursday');
    remove_active();
    $('#thursday').addClass('active');
  });

  $('#friday').on('click', function() {
    change_weekday('friday');
    remove_active();
    $('#friday').addClass('active');
  });

  $('#saturday').on('click', function() {
    change_weekday('saturday');
    remove_active();
    $('#saturday').addClass('active');
  });

  $('#sunday').on('click', function() {
    change_weekday('sunday');
    remove_active();
    $('#sunday').addClass('active');
  });




}); // end