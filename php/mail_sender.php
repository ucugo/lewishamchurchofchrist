<?php
$to      = 'ucugo1@gmail.com';
$from = $_REQUEST['email-address'];
$name = $_REQUEST['name'];
$subject = 'Contact form message';
$message = "From: ".$from." Senders email: ".$from." Message: ".$_REQUEST['message'];

print($message);
mail($to, $subject, $message, "From:" . $from);
header("Location: ../index.html#!/contact");
    echo "<script type='text/javascript'>'Message sent'</script>"
?>
