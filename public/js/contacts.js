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

    if (name.length < 3) {
      respond("Fill in your correct full Name", "error");
      return;
    } else if (!isValidEmailAddress(email)) {
      respond("Fill in valid email address", "error");
      return;
    } else if (phone.length < 6) {
      respond("Fill in your Phone number", "error");
      return;
    } else if (desc.length < 10) {
      respond("Fill in your request in full", "error");
      return;
    }

    var message = "Hi Feed Africa Farms, \nBelow is a new request from " + name;
    message += "\n\nPartner Type: " + type;
    message += "\nSubject: " + subject;
    message += "\nPhone Number: " + phone;
    message += "\nEmail Address: " + email;
    message += "\n\nRequest Description\n" + desc;

    $.ajax({
      url: "api/feedback/",
      type: "POST",
      data: { message: message },
      success: data => {
        respond(
          "Thanks for reaching out.\nYour request have been received, You will be contacted shortly.",
          "success"
        );
      },
      error: err => {
        respond("Couldn't process your request, please try again", "error");
      }
    });
  });
})(jQuery);

respond = (data, type) => {
  Swal.fire({
    title: "Request Sent!",
    text: data,
    type: type,
    confirmButtonText: "Ok"
  });

  isValidEmailAddress = emailAddress => {
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    return pattern.test(emailAddress);
  };
  
};
