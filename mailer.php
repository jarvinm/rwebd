<?php
if(isset($_POST['myform'])){
	$name = trim($_REQUEST['grwebd_name']);
    $email = trim($_REQUEST['grwebd_name']);
    $subject = trim($_REQUEST['grwebd_subject']);
    $message = trim($_REQUEST['grwebd_name']);
	$security = trim($_REQUEST['grwebd_unknown']);

	if($name && $email && $message){
		$from="From: $name<$email>\r\nReturn-path: $email";
		if(!$subject) $subject="Message sent using AHPLI Website contact form";
		//echo "yeah";
		if($security == ""){
			mail("gabimojica96@gmail.com", $subject, $message, $from);
			echo "success";
		}
	}

}

?>