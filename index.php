<?php 
  $cns = $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
?>
<!DOCTYPE html>
<head>
	<meta charset="utf-8">

	<link type="text/css" rel="stylesheet" media="all" href="css/bootstrap.css">
	<link type="text/css" rel="stylesheet" media="all" href="css/style.css">

	<link rel="icon" type="image/png" href="img/favicon.png">

	<title>Documents++</title>
</head>
<body>
	<div id="wrapper">
		<h1>Documents++</h1>
			<?php include 'bookmarklet.php'; ?>
	</div>
</body>
</html>
