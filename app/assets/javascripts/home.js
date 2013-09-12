$(document).ready(function(){
  container = $('#week');
  var large = $('.large');
  //card_class = $('.day').children(':first');
  var flip_icon = $('.flip_icon');
  var flip_back_icon = $('.flip_back_icon');
  var check = $('.check_icon');
  var delete_icon = $('.delete_icon');
  var add_task_icon = $('.add_task_icon');
  var red_icon = $('.red_theme_button');
  var black_icon = $('.black_theme_button');
  var gray_icon = $('.gray_theme_button');
  var jony_icon = $('.jony_ive_theme_button');
  var blue_icon = $('.blue_theme_button');
  var focused;

  // add class 'flipped' to card (flips div)
  var initialize_flipcard = function() {
    $("body").off('click');
    $("body").on('click', ".flip_icon", function(){
        $('.large').children(':first').addClass('flipped');
    });
    // remove class 'flipped' to card to flip back
    container.off('click');
    container.on('click', ".flip_back_icon", function(){
        $('.large').children(':first').removeClass('flipped');
    });
    $( ".sortable" ).sortable();
    $( ".sortable" ).disableSelection();
  };

  initialize_flipcard();



  // change_day function:
  //  on 'click' of day, remove class from 'week' and add 'class' of that day to 'week'
  // remove the class 'large' from anywhere on the body, except for the current day if it si the same click
  // add class 'large' to current day
  // add class 'small' to previous 'large' day

  var change_day = function() {
    var body = $('body');

    var dayOnclick = function(){
      $('.flipped').removeClass('flipped');
      $('#week').removeClass();
      $('#week').addClass(
        $(this).attr('id') + 'Pos'
      );
      $('.day').removeClass('large');
      $('.day').removeClass('small');
      $('.day').addClass('small');
      $(this).removeClass('small');
      $(this).addClass('large');
    };
    ['monday',
     'tuesday',
     'wednesday',
     'thursday',
     'friday',
     'saturday',
     'sunday'
    ].forEach(function(day){
      $('#' + day).on('click', dayOnclick);
    });
  };

  change_day();

  // initialize();

  // focuses on an event of the form submission;
  // prevents the default of the form submission
  // changes the css
  // goes up the dom to the 'li', then finds the next 'input' in the next 'li'
  var text_submission = function() {
    $('form').on('submit', function(event){
        event.preventDefault();

        focused.css({'color':'rgb(177, 217, 245);', 'text-shadow':'0 1px 2px rgba(0,0,0,0.1)'});

        focused.parent().parent().parent().next().find('input').focus();

        return false;
      });
    // from the global variable set above, 'focused' changes to whatver 'this' is
    $('form input').on('focus', function(e){
      focused = $(this);
    });
  };

  text_submission();

  // click on a checkmark and add a strike_through on the text in the form
  // then append it to the list of tasks
  var strike_through = function() {
    check.on('click', function() {
      var input_field = $(this).parent().parent().find('input');
      var ul = $(this).parent().parent().parent();

      input_field.css({'text-decoration':'line-through' });
      ul.append($(this).parent().parent());

      });
  };

  strike_through();

  // this doesn't work:
  var add_task = function() {
    add_task_icon.on('click', function() {
      var li = $(this).parent().parent().parent().find('.list');
      var ul = $(this).parent().parent().parent().find('ul');

      ul.append($(this).parent().parent().find('.list'));
    });
  };

  add_task();

  var delete_task = function() {
    delete_icon.on('click', function() {
      var input_field = $(this).parent().parent().find('input');

      $(this).parent().parent().remove();
      add_task();
    });
  };

  delete_task();

  // add color themes

  var red_theme = function() {
    red_icon.on('click', function() {
      $('body').removeClass();
      $('body').addClass('red');
    });
  };

  var gray_theme = function() {
    gray_icon.on('click', function() {
      $('body').removeClass();
      $('body').addClass('gray');
    });
  };

  var black_theme = function() {
    black_icon.on('click', function() {
      $('body').removeClass();
      $('body').addClass('black');
    });
  };

  var jony_theme = function() {
    jony_icon.on('click', function() {
      $('body').removeClass();
      $('body').addClass('jony');
    });
  };

  var blue_theme = function() {
    blue_icon.on('click', function() {
      $('body').removeClass();
    });
  };

  red_theme();
  gray_theme();
  black_theme();
  jony_theme();
  blue_theme();

}); // end