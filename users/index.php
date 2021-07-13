

<?php

header("Content-type:application/json");

include "../config/index.php";


$sql  = "SELECT * from user";


$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  $data = array();
  while($row = mysqli_fetch_assoc($result)) {
    array_push($data,$row);
  }
  echo json_encode($data);
} else {
  echo "0 results";
}


?>