<!DOCTYPE html>
<html>
<head>
	<title>G and C</title>
</head>
<body>
	<?php  
	define("NAME", 10);//this is a constant
	$x="outside";

	function conv()
	{
		global $x;
		$x= "inside";
	}
	echo $x."<br>";
	conv();
	echo $x."<br>";
	echo NAME; 

	//math functions link(https://www.php.net/manual/en/book.math)
	//string functions link(https://www.php.net/manual/en/book.strings)
	//array functions link(https://www.php.net/manual/en/book.array)

	?>
</body>
</html>