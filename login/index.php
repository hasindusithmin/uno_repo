
<?php

header("Content-type:application/json");

$req_body = json_decode(file_get_contents("php://input"),true);

$mail = $req_body["logmail"];

include "../config/index.php";

$sql = "SELECT * FROM user WHERE email = '$mail' ";

$result = mysqli_query($conn,$sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    echo $row["password"];
} else {
    echo "NF";
}









?>