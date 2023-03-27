<?php
  require 'db_connection.php';
  
  $data = json_decode(file_get_contents("php://input"));

  if(isset($data->customerids) && !empty(trim($data->customerids)))
  {
    $customerids = mysqli_real_escape_string($db_conn, trim($data->customerids));

    $add = mysqli_query($db_conn, "DELETE FROM customers_v05 WHERE customer_id = '$customerids'");

      if($add)
      {
        echo json_encode(["success" => true]);
        return;
      }
      else
      {
        echo json_encode(["success" => false, "message" => "Server!"]);
        return;
      }
  }
  else
  {
    echo json_encode(["success" => false, "message" => "Please fill all required fields!"]);
    return;
  }
?>