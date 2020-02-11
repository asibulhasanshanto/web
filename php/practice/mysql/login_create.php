<?php
	include "db.php";
	include "functions.php";

	createRow();
?>
<?php include "includes/header.php"; ?>
	<div class="container">
		<div class="col-sm-6">
			<h1 class="text-center">Create</h1>
			<form action="login_create.php" method="post">
				<div class="form-group">
					<label for="username">Username</label>
					<input type="text" name="name" class="form-control">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" name="pass" class="form-control">
				</div>
				<input class="btn btn-primary" type="submit" name="submit" value="Submit">
			</form>
		</div>
	<?php include "includes/footer.php";?> 