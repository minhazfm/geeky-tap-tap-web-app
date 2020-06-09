<?php
if(isset($_POST['EMAIL'])) {
    $email = $_POST['EMAIL'];
    $to = 'support@smplinc.com';
    $subject = "New Subscriber";
    $body = '<html>
                <body>
                    <h2>Hey there, you have a subscriber</h2>
                    <hr>
                    <p>Email:<br>'.$email.'</p>
                </body>
            </html>';
    
    //headers
    /*$headers = "From: ".$name." <".$email.">\r\n;*/
    $headers = 'From: '.$email. "\r\n" .
    'Reply-To: '.$email. "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    
    $headers .= "X-Priority: 1\n"; 
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
    
    //send
    $send = mail($to, $subject, $body, $headers);
    
    if($send) {
        echo '<br>';
        echo 'Thanks for subscribing ';
        echo '<br>';
        echo '<a href="../index.html"> Go Back to the website</a>';
    } else {
        echo 'There is an error';
        echo '<br>';
        echo '<a href="../index.html"> Go Back to the website</a>';
    }
}

?>