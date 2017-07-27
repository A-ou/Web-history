<?php 
function M(){
	$obj=new ModelController;
	return $obj;
}
function __autoload($classname){
	$classpath="./".$classname.".class.php";
	if(file_exists($classpath)){
		include_once "$classpath";
	}else{
		echo $classname."类不存在";
		die;
	}
}
