<?php
if(isset($_POST['Submit'])){
	//echo "button pressed";

	$name = array("abcdef","defghi","ghijklm");

	$username = $_POST['Name'];
	$password = $_POST['Password'];

	if(strlen($username)< 5)
	{
		echo "username has to be longar than five";
	}
	else if (strlen($username)>10) 
	{
		echo "username has to be less than 10";
	}

	if(!in_array($username, $name))
	{
		echo "sorry\n You are not allowed";
	}
	else
	{
		echo "welcome";
	}
?>