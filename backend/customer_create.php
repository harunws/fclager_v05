<?php
  require 'db_connection.php';

  $data = json_decode(file_get_contents("php://input"));

  if(isset($data->customerContractnr)
    && isset($data->customerFullname) 
    && isset($data->customerEmail)
    && isset($data->customerMobile)
    && isset($data->customerAddress)
    && isset($data->customerComment) 
    && isset($data->customerPar)

    && !empty(trim($data->customerContractnr))
    && !empty(trim($data->customerFullname)) 
    && !empty(trim($data->customerEmail))
    && !empty(trim($data->customerMobile))
    && !empty(trim($data->customerAddress))
    && !empty(trim($data->customerComment))   
    && !empty(trim($data->customerPar))

    ){

      $customerContractnr = mysqli_real_escape_string($db_conn, trim($data->customerContractnr));
      $customerFullname = mysqli_real_escape_string($db_conn, trim($data->customerFullname));
      $customerEmail = mysqli_real_escape_string($db_conn, trim($data->customerEmail));
      $customerMobile = mysqli_real_escape_string($db_conn, trim($data->customerMobile));
      $customerAddress = mysqli_real_escape_string($db_conn, trim($data->customerAddress));
      $customerComment = mysqli_real_escape_string($db_conn, trim($data->customerComment));
       //! HERE 'date' is a function. Not named value...
      $customerCreated = date('Y-m-d-H-i');
      $customerPar = mysqli_real_escape_string($db_conn, trim($data->customerPar));

      $add = mysqli_query(
        $db_conn, 
        "INSERT INTO customers_v05 (
          customer_contractnr, 
          customer_fullname, 
          customer_email, 
          customer_mobile,
          customer_address,
          customer_comment,
          customer_created,
          customer_par)

        VALUES (
          '$customerContractnr', 
          '$customerFullname', 
          '$customerEmail', 
          '$customerMobile', 
          '$customerAddress', 
          '$customerComment', 
          '$customerCreated', 
          '$customerPar')"         
        );

      if($add){
        $last_id =  mysqli_insert_id($db_conn);
        echo json_encode(["success" => true, "insertid" => $last_id]);
        return; 
      }
      else
      {
        echo json_encode(["success" => false, "msg" => "Server problem. Try again!"]);
        return;
      }

    }else
    {
      echo json_encode(["success" => false, "msg" => "Fill all required fields!"]);
      return;
    }
?>