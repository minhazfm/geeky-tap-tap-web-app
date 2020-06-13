function submitToAPI(e) {
    e.preventDefault();

    // Name input
    if ($("#name-input").val()=="") {
        alert ("Please enter your name");
        return;
    }
    var nameRE = /[A-Za-z]{1}[A-Za-z]/;
    if (!nameRE.test($("#name-input").val())) {
        alert ("Please enter your full name");
        return;
    }

    // Phone input
    // var phoneRE = /[0-9]{10}/;
    // if (!phoneRE.test($("#phone-input").val())) {
    //     alert ("Please enter a valid phone number");
    //     return;
    // }

    // Email input
    if ($("#email-input").val()=="") {
        alert ("Please enter your email");
        return;
    }
    var emailRE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!emailRE.test($("#email-input").val())) {
        alert ("Please enter a valid email address");
        return;
    }

    // Message input
    if ($("#message-input").val()=="") {
        alert ("Please enter a message, such as what you're needing help with");
        return;
    }

    var name = $("#name-input").val();
    // var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var message = $("#message-input").val();
    var data = {
        name: name,
        // phone: phone,
        email: email,
        message: message
    };

    $.ajax({
        type: "POST",
        url : "https://3kueqdyt1f.execute-api.us-east-1.amazonaws.com/prod/",
        headers: { 
            'x-api-key': 'je5g1aCyjP6Qg5RgWbfXY2DoKPctzbmR966utjNQ' 
        },
        dataType: "json",
        // crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        success: function () {
            // clear form and show a success message
            alert("Successfull");
            document.getElementById("contact-form").reset();
            // location.reload();
        },
        error: function () {
            // show an error message
            alert("Unsuccessfull: Please try again");
        }});
}