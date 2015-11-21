<?php
if(isset($_POST['myform'])){
	$name = trim($_REQUEST['grwebd_name']);
    $email = trim($_REQUEST['grwebd_email']);
    $subject = trim($_REQUEST['grwebd_subject']);
    $message = trim($_REQUEST['grwebd_message']);
	// $security = trim($_REQUEST['grwebd_unknown']);

	if($name && $email && $message){
		$from="From: $name<$email>\r\nReturn-path: $email";
		if(!$subject) $subject="Message sent using :: The Hour :: Self-defense Website";
		//echo "yeah";
		// if($security == ""){
			mail("gabimojica96@gmail.com", $subject, $message, $from);
			echo "success";
		// }
	}

	// echo "success";

}

?>