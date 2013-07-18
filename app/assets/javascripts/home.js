$(document).ready(function(){

  var container = $('#week');
  var days = $('.day');
  var card_class = $('.day').children(':first');
  var flip_button = $('.flip_button');

  // show button
  var show_button = function(this_div) {
    $(this_div).prepend(flip_button);
  };

  $('.flip_button').on('click',function(){
        $(this)
          .parent()
          .find('.card')
          .addClass('flipped');

        $(this).hide();
  });

  // change days
  var day_changer = function() {
    var day_div = $(this);
    var day_id = day_div.attr('id');

    // 1) remove the day class from week
    container.removeClass().addClass(day_id);
    // 2) remove the active class from any days that have it
    days.removeClass('active');
    // 3) add the active class to the one that was just clicked
    day_div.addClass('active');

    show_button(day_div);
  };

  // initialize
  var initialize = function() {
    for (i=0; i<=days.length; i++) {
      $(days[i]).on('click', day_changer);
    }
  };

  initialize();

}); // end