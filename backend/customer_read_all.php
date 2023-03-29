<?php 
  require 'db_connection.php';

  $allCustomers = mysqli_query(
    $db_conn, "SELECT * FROM customers_v05 ORDER BY customer_id DESC"
  );

  if(mysqli_num_rows($allCustomers) > 0)
  {
    while($row = mysqli_fetch_array($allCustomers))
    {
      $viewjson["customer_id"] = $row['customer_id'];
      $viewjson["customer_contractnr"] = $row['customer_contractnr'];
      $viewjson["customer_fullname"] = $row['customer_fullname'];
      $viewjson["customer_email"] = $row['customer_email'];
      $viewjson["customer_mobile"] = $row['customer_mobile'];
      $viewjson["customer_address"] = $row['customer_address'];
      $viewjson["customer_comment"] = $row['customer_comment'];
      $viewjson["customer_created"] = $row['customer_created'];
      $viewjson["customer_par"] = $row['customer_par'];    
      
      $json_array["customerdata"][] = $viewjson;
    }

    echo json_encode(["success" => true, "customerlist" => $json_array]);
    return;
  }
  else
  {
    echo json_encode(["success" => false]);
  }
  
?>