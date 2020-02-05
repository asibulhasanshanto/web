<!DOCTYPE html>
<html>
<head>
	<title>functions</title>
</head>
<body>
	<?php  
	function firstone()
	{
		echo "In function"."<br>";
	}

	firstone();

	function add($a,$b)
	{
		$sum = $a+$b;
		return $sum;
	}
	$result = add(5,10);
	echo $result;
	?>
</body>
</html>