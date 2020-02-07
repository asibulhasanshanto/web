<?php
	
	include "db.php";
	include "functions.php";
	
	updateTable();		
	?>

<?php include "includes/header.php"; ?>
	<div class="container">
		<div class="col-sm-6">
		<form action="login_update.php" method="post">
						<h1 class="text-center">Update</h1>

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
	<?php include "includes/footer.php";?>