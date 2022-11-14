<?php

    include 'db_connect.php';

    $sql = 'select * from feedback';

    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
// output data of each row
      while($row = $result->fetch_assoc()) {
        // echo '<option value='.$row["d_id"].'>'.$row["d_name"].'</option>';
        //  echo "id: " . $row["d_id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
     $d_array[] = $row;
        
    }
    echo json_encode($d_array);
} else {
    echo "0 results"; 
  }



?>