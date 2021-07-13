

<?php



header("Content-type:application/json");

$req_body = json_decode(file_get_contents("php://input"),true);

$f = $req_body['firstname'];
$l = $req_body['lastname'];
$n = $req_body['nic'];
$c = $req_body['city'];
$e = $req_body['email'];
$p = $req_body['password'];

$sql = "INSERT INTO user (firstname,lastname,nic,city,email,password) VALUES ('$f','$l',$n,'$c','$e','$p')";

include '../config/index.php';

if (mysqli_query($conn,$sql)) {
   echo "200";
}
else {
  echo "400";
}





?>