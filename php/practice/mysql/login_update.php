<?php
	
	include "db.php";
	include "functions.php";

	if(isset($_POST['submit']))
	{
		$username = $_POST['name'];
		$password = $_POST['pass'];
		$id = $_POST['id'];

		$query = "UPDATE users SET "; 
		$query.= "username = '$username', ";
		$query.= "password = '$password' "; 
		$query.= "WHERE id = $id ";

		$result = mysqli_query($connection, $query);
		if(!$result) 
		{
			die("faild".mysqli_error($connection));
		}
	}

?>




<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</head>
<body>

	<div class="container">
		<div class="col-sm-6">
		<form action="login_update.php" method="post">
				<div class="form-group">
					<label for="username">Username</label>
					<input type="text" name="name" class="form-control">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="pass" class="form-control">
				</div>
				<div class="form-group">
					<select name="id" id="">
						<?php
							showAllData();
						?>
						
					</select>
					
				</div>
				<input class="btn btn-primary" type="submit" name="submit" value="Update">
			</form>
		</div>
	</div>

</body>
</html>