<?php
    //根据客户端传递过来的菜品编号，查询出该菜品的所有信息
    //以JSON格式返回给客户端

	$dno = $_REQUEST['dno'];
	// print_r($dno);
	// die;
	$conn = mysqli_connect('127.0.0.1', 'root', 'root', 'shop');
	$sql = 'SET   NAMES   UTF8';
    mysqli_query($conn,  $sql);
	$sql = "SELECT * FROM  goods  WHERE id='$dno'";
    $result = mysqli_query($conn,  $sql);
    
	$row = mysqli_fetch_array($result);

    //sleep(1);

	echo  json_encode( $row );

?>