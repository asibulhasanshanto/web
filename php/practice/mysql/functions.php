<?php
include "db.php";
function createRow()
{
	global $connection;
	if(isset($_POST['submit']))
	{
		$username = $_POST['name'];
		$password = $_POST['pass'];
 
		$query = "INSERT INTO users(username,password) ";
		$query.= "VALUES ('$username', '$password')";

		$result = mysqli_query($connection, $query);

		if(!$result)
		{
			die('query faild'.mysqli_error());
		}
		else
		{
			echo "record created";
		}
	}
}
function readData()
{
	global $connection;
	$query = "SELECT * FROM users";

	$result = mysqli_query($connection, $query);

	if(!$result)
	{
		die('query faild'.mysqli_error());
	}
	
	while ($row = mysqli_fetch_assoc($result)) 
	{
		print_r($row);	
	}

}
function showAllData()
{
	global $connection;
	
	$query = "SELECT * FROM users";

	$result = mysqli_query($connection, $query);

	if(!$result)
	{
		die('query faild'.mysqli_error());
	}

	while ($row = mysqli_fetch_assoc($result)) 
	{
		$id = $row['id'];	
	echo "<option value='$id'>$id</option>";
	}
}


function updateTable()
{
	if(isset($_POST['submit']))
	{
		global $connection;
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
		else
		{
			echo "record updated where id = $id"; 
		}
	}
}

function deleteRows()
{
	if(isset($_POST['submit']))
	{
		global $connection;
		$username = $_POST['name'];
		$password = $_POST['pass'];
		$id = $_POST['id'];

		$query = "DELETE FROM users "; 
		$query.= "WHERE id = $id ";
		$result = mysqli_query($connection, $query);
		if(!$result) 
		{
			die("faild".mysqli_error($connection));
		}
		else
		{
			echo "record deleted where id = $id";
		}
	}
	
}

?>