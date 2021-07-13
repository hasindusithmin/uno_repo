

<?php

header("Content-type:application/json");


include "../config/index.php";

$sql = "SELECT email FROM user";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    $data = array();
    while($row = mysqli_fetch_assoc($result)) {
        array_push($data,$row["email"]);
    }
    echo json_encode($data);
  } else {
    echo "0 results";
  }
  
mysqli_close($conn);








?>