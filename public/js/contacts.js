(function($) {
  "use strict";

  $("#submit").click(function(e) {
    
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var type = $("#type :selected").text();
    var subject = $("#subject").val();
    var phone = $("#phone").val();
    var desc = $("#text").val();

    var message =
      "Hi Feed Africa Farms, \nBelow is a new request from " + name;
    message += "\n\nPartner Type: " + type;
    message += "\nSubject: " + subject;
    message += "\nPhone Number: " + phone;
    message += "\nEmail Address: " + email;
    message += "\n\nRequest Description\n" + desc;

    $.ajax({
      url: "api/feedback/",
      type: "POST",
      data: { message: message},
      success: data => {
        respond(
          "Thanks for reaching out.\nYour request have been received, You will be contacted shortly.",
          'success'
        );
      },
      error: err => {
        respond("Couldn't process your request, please try again",
        'error');
      }
    }); 
  });
})(jQuery);

respond = (data,type) => {
  Swal.fire({
    title: 'Request Sent!',
    text: data,
    type: type,
    confirmButtonText: 'Ok'
  })
};
