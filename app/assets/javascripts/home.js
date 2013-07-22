$(document).ready(function(){
  window.container = $('#week');
  var days = $('.day');
  window.card_class = $('.day').children(':first');
  var flip_icon = $('#flip_icon');
  var flip_back_icon = $('#flip_back_icon');
  var check = $('.check_icon');
  var delete_icon = $('.delete_icon');
  var add_task_icon = $('.add_task_icon');
  var red_icon = $('#red_theme_button');
  var black_icon = $('#black_theme_button');
  var gray_icon = $('#gray_theme_button');
  var jony_icon = $('#jony_ive_theme_button');
  var focused;

  // show flip_icon button
  // var show_button = function(this_div) {
  //   $(this_div).prepend(flip_icon);
  // };

  // add class 'flipped' to card (flips div)

  window.initialize_flipcard = function() {
    $("body").off('click');
    $("body").on('click', "#flip_icon", function(){
        card_class.addClass('flipped');
      });

    // remove class 'flipped' to card to flip back
      container.off('click');
      container.on('click', "#flip_back_icon", function() {
        card_class.removeClass('flipped');
      });

      $( "#sortable" ).sortable();
      $( "#sortable" ).disableSelection();

  };

  window.initialize_flipcard();

  // 'previous_day' passed in from controller
  // renders the form partial 'big_list'
  var render_forms = function(this_div, previous_day) {
    var day_id = $(this_div).attr('id');
    var settings = {
      type: "post",
      dataType: "script",
      url: "/switch_day",
      data: { selected_day_of_week: day_id,
        previous_day_of_week: previous_day
      }
    };
    $.ajax(settings);
  };

  // from click change days
  var day_changer = function() {
    var day_div = $(this);

    if(day_div.hasClass("active") === false) {
      var day_id = day_div.attr('id');

      var previous_active_day = $('.active').attr('id');

      // 1) remove the day class from week
      container.removeClass().addClass(day_id);
      // call ajax to render forms:
      render_forms(day_div, previous_active_day);


    }

  };

  // initialize
  var initialize = function() {
    for (i=0; i<=days.length; i++) {
      $(days[i]).on('click', day_changer);
    }
  };

  initialize();

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

  var delete_task = function() {
    delete_icon.on('click', function() {
      var input_field = $(this).parent().parent().find('input');

      $(this).parent().parent().remove();
    });
  };

  delete_task();

  // this doesn't work:
  // var add_task = function() {
  //   add_task_icon.on('click', function() {
  //     var li = $(this).parent().parent().parent().find('.list');
  //     var ul = $(this).parent().parent().parent().find('ul');

  //     ul.prepend(li);
  //   });
  // };

  // add_task();

  // add red-theme:

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

  red_theme();
  gray_theme();
  black_theme();
  jony_theme();




}); // end