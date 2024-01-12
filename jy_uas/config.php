<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json");
    $dbConn = mysqli_connect("localhost", "root", "", "db_crud") or die(mysqli_error());
	
	function dbQuery($sql) {
		global $dbConn;
		$result = mysqli_query($dbConn, $sql) or die(mysqli_error($dbConn));
		return $result;
	}
	
	function dbAffectedRows() {
		global $dbConn;
		return mysqli_affected_rows($dbConn);
	}
	
	function dbFetchArray($result, $resultType = MYSQLI_NUM) {
		return mysqli_fetch_array($result, $resultType);
	}
	
	function dbFetchAssoc($result) {
		return mysqli_fetch_assoc($result);
	}
	
	function dbFetchRow($result) {
		return mysqli_fetch_row($result);
	}
	
	function dbFreeResult($result) {
		return mysqli_free_result($result);
	}
	
	function dbNumRows($result) {
		return mysqli_num_rows($result);
	}
	
	function dbNumFields($result) {
		return mysqli_num_fields($result);
	}
	
	function dbInsertId() {
		global $dbConn;
		return mysqli_insert_id($dbConn);
	}

	function closeConn() {
		global $dbConn;
		mysqli_close($dbConn);
	}
/*
* End of file database.php
*/
?>
