<?php
    include './script/db_connect.php';

    $d_id =$_GET['d_id'];

$sql = "select * from sub_division where d_id='$d_id'";
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