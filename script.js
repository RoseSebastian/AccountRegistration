$(document).ready(function() {
    $('form[id="accountForm"]').validate({
        rules: {
          name: {
            required: true,
            minlength: 3,
            maxlength: 50
          },
          email: {
            required: true,
            email: true,
          },
          phone: {
            required: true,
            minlength: 10,
            maxlength: 14
          },
          age: {
            range: [18, 120]
          },
          gender: {
            required: true,
            minlength: 4,
            maxlength: 15
          },
          address: {
            maxlength: 50
          }
        },
        messages: {
          name: {
            required : 'Please enter your name.',
            maxlength : 'Maximum allowed characters is 50.'
          },
          email : "Valid email is required",
          phone : {
            required : "Please enter your phone number",
            minlength : "Phone number should be greater than 9 digits",
            maxlength : "Phone number should be less than 15 digits"
          },
          age : {
            range : "Age should be between 18 and 120"
          },
          gender: {
            required : "Please enter your gender",
            minlength : "Minimun 4 characters required",
            maxlength : "Please limit to 15 characters"
          },
          address : {
            maxlength : "Maximun 50 characters"
          }
        },
        submitHandler: function(form) {
          form.submit();
        }
      });
});