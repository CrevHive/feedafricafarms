(function ($) {
  'use strict';
  $(function () {

    //make an http call to retrieve summary
    $.ajax({
      url: "api/feedback/",
      type: "POST",
      data: {message:"Hello from the other side"},
      success: (data) => {
        respond('Your request have been received,You will be contacted soon Howevever, it can take up to 2 business days.');
      },
      error: (err) => {
        respond("Couldn't process your request, please try again");
      }
    });

  });

})(jQuery);

respond = (data) => {

  $("#response").text(data);
}
