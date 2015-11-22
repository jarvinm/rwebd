<?php
error_reporting(0);
if(isset($_POST['grwebd_email'])){
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
		if(filter_var($email, FILTER_VALIDATE_EMAIL)){
			mail("gabimojica96@gmail.com", $subject, $message, $from);
			echo "success";
		}else{
			echo "error3"; // EMAIL NOT VALID
		}
		// }
	}else{
		echo "error2"; // NAME, EMAIL & MESSAGE NOT PROVIDED
	}

	// echo "success";

}else{
	echo "error1"; // FORM NOT SUBMITTED
}

?>