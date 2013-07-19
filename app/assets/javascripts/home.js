$(document).ready(function(){

  var container = $('#week');
  var days = $('.day');
  var card_class = $('.day').children(':first');
  var flip_icon = $('#flip_icon');
  var flip_back_icon = $('#flip_back_icon');

  // show button
  var show_button = function(this_div) {
    $(this_div).prepend(flip_icon);
  };

  // add class 'flipped' to card (flips div)
  flip_icon.on('click',function(){
        // $(this)
        //   .parent()
        //   .find('.card')
          card_class.addClass('flipped');
  });

  // remove class 'flipped' to card to flip back

  flip_back_icon.on('click', function() {
    card_class.removeClass('flipped');
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
    // remove 'flipped' from 'card' to flip back if on back of card
    // this doesn't work:::
    // $('.card').removeClass('flipped');


    // show_button(day_div);
  };

  // initialize
  var initialize = function() {
    for (i=0; i<=days.length; i++) {
      $(days[i]).on('click', day_changer);
    }
  };

  initialize();

}); // end