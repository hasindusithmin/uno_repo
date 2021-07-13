
<?php

header("Content-type:application/json");

$req_body = json_decode(file_get_contents("php://input"),true);

$brand = $req_body["brand"];
$model = $req_body["model"];

include "../config/index.php";

$sql = "SELECT * FROM car WHERE brand = '$brand' and model = '$model'";
function blob_to_string($bin){
  $char = explode(' ', $bin);
  $userStr = '';
  foreach($char as $ch) 
  $userStr .= chr(bindec($ch));
  return $userStr;
}

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  $data = array();
  while($row = mysqli_fetch_assoc($result)){
    $row["images"] = blob_to_string($row["images"]);
    array_push($data,$row);
  }
  echo json_encode($data);
} else {
  echo "0 results";
}






?>