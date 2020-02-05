<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php  
	$numberList = array(52,87,'hello','as', '<h1>hdhf</h1>');
	echo $numberList[2];
	echo "<br>";

	$assoArray = array("firstname" => 'Asibul', "LastName" => 'Hasan');
	//print_r($assoArray);
	echo "<br>";
	echo $assoArray['firstname']." ".$assoArray['LastName'];
	?>
</body>
</html>