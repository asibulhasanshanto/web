<!DOCTYPE html>
<html>
<head>
	<title>form</title>
</head>
<body>
	<form action="formProcess.php" method="post"> <!--sends data to form.php-->
		<input type="text" placeholder="Enter name" name="Name">
		<input type="password" placeholder="Enter password" name="Password">
		<br>
		<input type="submit" name="Submit">
	</form>
	<?php  
	?>
</body>
</html>