<?php
    //查询出指定条数开始的菜品的所有数据，返回给客户端(JSON格式)
    //$start = $_REQUEST('start');  //从哪一条记录开始
    //$count = 5;  //一次最多返回5条记录
    //SELECT id,name,img,material FROM dish LIMIT ?,?
    //echo json_encode($arr)

	$conn = mysqli_connect('127.0.0.1',   'root',   'root',  'shop'); 
	$sql = 'SET   NAMES   UTF8';
    mysqli_query($conn,  $sql);
	$sql = "SELECT   *  FROM  goods";   
    $result = mysqli_query($conn,  $sql);
    
	// $outputArr = [  ];   //用于保存查询到的所有记录
	while(  $row = mysqli_fetch_array($result)   ){

		$outputArr[ ] = $row;   //把查得的一行记录保存到输出数组
	}

	//var_dump($outputArr);
	//把一个PHP数组格式化为JSON字符串
	echo  json_encode( $outputArr );

?>