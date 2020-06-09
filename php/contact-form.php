<?php
if (isset($_REQUEST['name'],$_REQUEST['email'])) {
      
    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];
      
    // Set your email address where you want to receive emails. 
    $to = 'support@smplinc.com';
      
    $headers = "From: ".$name." <".$email."> \r\n";
      
    $send_email = mail($to,$message,$headers);
      
    if($send_email) {
        echo '<br>';
        echo 'Message Sent Successfully';
        echo '<br>';
        echo '<a href="../index.html"> Go Back to the website</a>';
    } else {
        echo 'There was an error, Please Try Again';
        echo '<br>';
        echo '<a href="../index.html"> Go Back to the website</a>';
    }
      
}
?>