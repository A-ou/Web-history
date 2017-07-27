<?php 
header("Content-type:text/html;charset=utf8");
class ModelController{
	protected $dsn="mysql:host=localhost;dbname=shop";
	protected $user="root";
	protected $pass="root";
	static $pdo;
	function __construct(){
		if(is_null(self::$pdo)){
			try {
				self::$pdo=new pdo($this->dsn,$this->user,$this->pass);
				self::$pdo->query("SET NAMES UTF8");
				self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
			} catch (Exception $e) {
				echo $e;
			}
		}
	}
	public function select_sql($sql){
		// SELECT * FROM table WHERE ID;
		$result=self::$pdo->query($sql);
		$row=$result->fetchAll(PDO::FETCH_ASSOC);
		return $row;
	}
	public function delete_sql($table,$id){
		// DELETE FROM table WHERE id=$id;
		$row=self::$pdo->exec("DELETE FROM {$table} WHERE id={$id}");
		return $row;
	}
	public function insert_sql($table,$data){
		// insert into student (id,name,sex,age) values ('141184003','王五','男','23');
		$str=implode(",",array_keys($data));
		$datas="'".implode("','",$data)."'";
		$row=self::$pdo->exec("INSERT INTO {$table} ({$str}) VALUES ({$datas})");
		return $row;
	}
	public function update_sql($table,$data,$id){
		// update table set name="老刘",sex="男" WHERE id='141184001';
		$str='';
		// print_r($data);
		// die;
		foreach ($data as $k => $v) {
			$str.=','.$k.'="'.$v.'"';
		}
		$str=substr($str,1);

		$row=self::$pdo->exec("UPDATE {$table} SET {$str} WHERE user={$id}");
		return $row;
	}
}