<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json");
include "config.php";
define("URL", "http://localhost:8080/api-crud/");
///fix
function responseJson($msg, $data = null){
    $array = [
        "status" => !$msg ,
        "message" => $msg,
        "data" => $data
    ];
    
    return print_r(json_encode($array, JSON_PRETTY_PRINT));
}
///login
function login($npm, $pass) {

    $sql = "SELECT * FROM login WHERE (npm = '$npm' OR email = '$npm') AND password = '$pass'";
    $query = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($query);

    if ($row != null) {
        $data = [
            "npm" => $row['npm'],
            "email" => $row['email'],
            "password" => $row['password'],
        ];
        return responseJson(null, $data);
    } else {
        return responseJson("Data tidak ditemukan");
    }
}

function logintb(){
    $sqli="SELECT * FROM login";
    $query = dbQuery($sqli);
    while($row = mysqli_fetch_array($query)){
        $datalog[] = array(
            "id"=> $row['id'],
            "email"=> $row['email'],
            "password"=> $row['password'],
        );
    }
    if(dbNumRows($query) > 0) {
        return responseJson(null, $datalog);
    } else {
        return responseJson("data tidak ada");
    }
    
}
function regis($data2){
    $npm2 = $data2["npm"];
    $em = $data2["email"];
    $pass = $data2["password"];
    $sqli = "INSERT INTO login (id,npm, email, password)
    VALUES ('','$npm2', '$em', '$pass')";
     if (dbQuery($sqli)) {
        $data2 = [
            '',
            "npm"=> $npm2,
            "email"=> $em,
            "password"=> $pass,
        ];
        return responseJson(null, $data2);
    } else {
        $msg = "Error: " . $sqli ;
        return responseJson($msg);
    }
}


///das
function getAll() {
    $sql = "SELECT * FROM tbl_mahasiswa";
    $query = dbQuery($sql);
    while($row = mysqli_fetch_array($query)){
        $dataUser[] = array(
            "kd"=> $row['id'],
            "nama_mahasiswa"=> $row['nama'],
            "jenis_kelamin"=> $row['jenis_kelamin'],
            "no_hp"=> $row['no_hp'],
            "email"=> $row['email'],
            "asal_sekolah"=> $row['asal_sekolah'],
            "jurusan"=> $row['jurusan'],
            "jenjang"=> $row['jenjang'],
            "kelas"=> $row['kelas'],
            "info"=> $row['info'],
            "foto_siswa"=> URL."upload/".$row['foto'],
        );
    }
    if(dbNumRows($query) > 0) {
        return responseJson(null, $dataUser);
    } else {
        return responseJson("data tidak ada");
    }
}

function getId($id) {
    $sql = "SELECT * FROM tbl_mahasiswa WHERE id = '$id'";
    $query = dbQuery($sql);
    $row = mysqli_fetch_array($query);
    $data = [
        "kd"=> $row['id'],
        "nama_mahasiswa"=> $row['nama'],
        "jenis_kelamin"=> $row['jenis_kelamin'],
        "no_hp"=> $row['no_hp'],
        "email"=> $row['email'],
        "asal_sekolah"=> $row['asal_sekolah'],
        "jurusan"=> $row['jurusan'], 
        "jenjang"=> $row['jenjang'],
        "kelas"=> $row['kelas'],
        "info"=> $row['info'],
        "foto_siswa"=> URL."upload/".$row['foto'],
    ];
    if($row != null) {
        return responseJson(null, $data);
    } else {
        return responseJson("data tidak ada");
    }
}

function insert($data){
    $nama = $data["nama_mahasiswa"];
    $jk = $data["jenis_kelamin"];
    $hp = $data["no_hp"];
    $email =$data["email"];
    $asal =$data["asal_sekolah"];
    $jurusan = $data["jurusan"]; 
    $jj = $data["jenjang"];
    $kelas =$data["kelas"];
    $info =$data["info"];
    $foto = $data["foto_siswa"];
    $namaFile = $foto['name'];

    $sql = "INSERT INTO tbl_mahasiswa ( nama, jenis_kelamin,no_hp,email,asal_sekolah, jurusan,jenjang,kelas,info, foto)
    VALUES ('$nama', '$jk','$hp','$email','$asal', '$jurusan','$jj','$kelas','$info', '$namaFile')";
    

    // upload file
    $namaSementara = $foto['tmp_name'];
    $dirUpload = "upload/";
    $terupload = move_uploaded_file($namaSementara, $dirUpload.$namaFile);
    if (!$terupload) {
        return responseJson("file foto wajib di upload!!");
    }

    if (dbQuery($sql)) {
        $id = dbInsertId();
        $data = [
            "id"=> $id,
            "nama"=> $nama,
            "jenis_kelamin"=> $jk,
            "no_hp"=> $hp,
            "email"=> $email,
            "asal_sekolah"=> $asal,
            "jurusan"=> $jurusan,
            "jenjang"=> $jj,
            "kelas"=> $kelas,
            "info"=> $info,
            "foto"=> $namaFile,
        ];
        return responseJson(null, $data);
    } else {
        $msg = "Error: " . $sql ;
        return responseJson($msg);
    }
}

function update($data){
    $id = $data["id"];
    $nama = $data["nama_mahasiswa"];
    $jk = $data["jenis_kelamin"];
    $hp = $data["no_hp"];
    $email =$data["email"];
    $asal =$data["asal_sekolah"];
    $jurusan = $data["jurusan"]; 
    $jj = $data["jenjang"];
    $kelas =$data["kelas"];
    $info =$data["info"];
    $foto = $data["foto_siswa"];
    

    $sql = "SELECT * FROM tbl_mahasiswa WHERE id = '$id'";
    $query = dbQuery($sql);
    $row = mysqli_fetch_array($query);
    if($row == null) {
        return responseJson("mahasiswa tidak ada");
    }

    if($foto != "" or $foto) {
        $namaFile = $foto['name'];
    } else {
        $namaFile = $row['foto'];
    }

    $sql = "UPDATE tbl_mahasiswa SET nama='$nama', jenis_kelamin='$jk', no_hp='$hp', email='$email', asal_sekolah='$asal', jurusan='$jurusan', jenjang ='$jj', kelas ='$kelas', info ='$info', foto='$namaFile' WHERE id=$id";

    // upload file
    $namaSementara = $foto['tmp_name'];
    $dirUpload = "upload/";
    $terupload = move_uploaded_file($namaSementara, $dirUpload.$namaFile);
    

    if (dbQuery($sql)) {
        $data = [
            "id"=> $id,
            "nama_mahasiswa"=> $nama,
            "jenis_kelamin"=> $jk,
            "no_hp"=> $hp,
            "email"=> $email,
            "asal_sekolah"=> $asal,
            "jurusan"=> $jurusan, 
            "jenjang"=> $jj,
            "kelas"=> $kelas,
            "info"=> $info,
            "foto"=> $namaFile,
        ];
        return responseJson(null, $data);
    } else {
        $msg = "Error: " . $sql ;
        return responseJson($msg);
    }
}

function delete($id){
    $sql = "SELECT * FROM tbl_mahasiswa WHERE id = '$id'";
    $query = dbQuery($sql);
    $row = mysqli_fetch_array($query);
    if($row == null) {
        return responseJson("mahasiswa tidak ada");
    }

    $sql = "DELETE FROM tbl_mahasiswa WHERE id = '$id'";
    $query = dbQuery($sql);
    if (dbQuery($sql)) {
        return responseJson(null, $id);
    } else {
        $msg = "Error: " . $sql ;
        return responseJson($msg);
    }
}
///fungtion
$getAction = @$_GET['action'];
$id = @$_GET["kd"];
$nama = @$_POST["nama_mahasiswa"];
$jk = @$_POST["jenis_kelamin"];
$hp = @$_POST["no_hp"];
$email = @$_POST["email"];
$asal = @$_POST["asal_sekolah"];
$jurusan = @$_POST["jurusan"];
$jj = @$_POST["jenjang"];
$kelas = @$_POST["kelas"];
$info = @$_POST["info"];
$foto = @$_FILES["foto_siswa"];
$data = [
        "id"=> $id,
        "nama_mahasiswa"=> $nama,
        "jenis_kelamin"=> $jk,
        "no_hp"=> $hp,
        "email"=> $email,
        "asal_sekolah"=> $asal,
        "jurusan"=> $jurusan,
        "jenjang"=> $jj,
        "kelas"=> $kelas,
        "info"=> $info,
        "foto_siswa"=> $foto,
    ];
//
$npm2 = @$_POST["npm"];
$em = @$_POST["email"];
$pass = @$_POST["password"];

$data2=[
        "npm"=> $npm2,
        "email"=> $em,
        "password"=> $pass,
];

if ($getAction != null) {
    
    if($getAction == "getAll") 
        return getAll();
    if($getAction == "get") 
        return getId($id);
    if($getAction == "insert") 
        return insert($data);
    if($getAction == "update") 
        return update($data);
    if($getAction == "delete") 
        return delete($id);
    if($getAction == "logintb") 
        return logintb();
    if($getAction == "regis") 
        return regis($data2);
} else {
    $data = [
        "status" => false,
        "msg" => 'ok'
    ];
    print_r(json_encode($data, JSON_PRETTY_PRINT));
}
?>

