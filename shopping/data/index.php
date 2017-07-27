<?php 
include_once "function.php";
$obj=isset($_REQUEST['c'])?$_REQUEST['c']:"Index";
$obj.="Controller";
$b=new $obj;
$a=isset($_REQUEST['a'])?$_REQUEST['a']:'index';
$b->$a();