<?php
$to      = 'ucugo1@gmail.com';
$from = $_REQUEST['email-address'];
$name = $_REQUEST['name'];
$subject = 'Contact form message';
$message = "From: ".$from." Senders email: ".$from." Message: ".$_REQUEST['message'];

$headers = 'From: webmaster@lewishamchurchofchrist.co.uk' . "\r\n" .
    'Reply-To: webmaster@lewishamchurchofchrist.co.uk' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

print($message);
mail($to, $subject, $message, $headers);
header("Location: ../index.html#!/contact");
    echo "<script type='text/javascript'>'Message sent'</script>"
?>
