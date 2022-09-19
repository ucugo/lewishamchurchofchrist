<?php
$to        = 'ucugo1@gmail.com';
$from      = $_REQUEST['email-address'];
$name      = $_REQUEST['name'];
$subject   = 'Church Contact form message';
$telephone = $_REQUEST['telephone'];

$message =  "Name: "         . $name      . "\t\n\n\n"
            . "From: "       . $from      . "\r\n\n\n"
            . "Telephone:  " . $telephone . "\r\n\n\n"
            . "Message: "    . $_REQUEST['message'];

$headers = 'From: webmaster@lewishamchurchofchrist.co.uk' . "\r\n" .
           'Reply-To: webmaster@lewishamchurchofchrist.co.uk' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

print($message);
mail($to, $subject, $message, $headers);
header("Location: ../index.html#!/contact");
    echo "<script type='text/javascript'>'Message sent'</script>"
?>
