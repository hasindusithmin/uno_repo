


<?php



$req_body = json_decode(file_get_contents("php://input"),true);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "lankasale";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

function string_to_blob($str){
    $bin = "";
    for($i = 0, $j = strlen($str); $i < $j; $i++) 
    $bin .= decbin(ord($str[$i])) . " ";
    return $bin;
  }
string_to_blob("PHPCODER");

$brand = $req_body["brand"];
$model = $req_body["model"];
$conditions = $req_body["condition"];
$price = $req_body["price"];
$descriptions = $req_body["description"];
$images = string_to_blob($req_body["image_data"]);
$images = $req_body["image_data"];
$image_type = $req_body["image_type"];


$sql = "INSERT INTO car (brand,model,conditions,price,descriptions,images,image_type) VALUES ('$brand','$model','$conditions',$price,'$descriptions','$images','$image_type')";
       

if (mysqli_query($conn,$sql)) {
    echo "data inserted";
}
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


?>


