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
	// echo $username;
	// echo $password;
}
?>


<!DOCTYPE html>
<html>
<head>
	<title>form</title>
</head>
<body>
	<form action="form.php" method="post"> <!--sends data to form.php-->
		<input type="text" placeholder="Enter name" name="Name">
		<input type="password" placeholder="Enter password" name="Password">
		<br>
		<input type="submit" name="Submit">
	</form>
	<?php  
	?>
</body>
</html>