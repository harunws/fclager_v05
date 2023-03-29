import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CustomerDetail() {

  let params = useParams(); 

  useEffect( () => {   
   single_customer_detail(params.ids);
  }, [params.ids]); 

  //! Dependency "param.ids" not include in tut_src in array [param.ids] added after react warning.

  const [iscustomer, setCustomer] = useState([]);
  
  const single_customer_detail = async (ids) => {

    try {
      axios.post(`http://localhost/fclager/fclager_v05/backend/customer_read_single.php`, { 
       
        customerids: ids,
      })
      .then(res => {

        console.log(res.data.customerlist.customerdata)

        setCustomer(res.data.customerlist.customerdata[0]);
            
      })
    } catch (error) { throw error;}    
  }

  return (

    <div className='container mt-4'>
      <h4> Customer Detail Page</h4>

      { iscustomer ? 
        <div>
          {/* Here find a solution for index */}
          <p> # {iscustomer.customer_id}</p>
          <p>Name : {iscustomer.customer_contractnr} </p> 
          <p>Name : {iscustomer.customer_fullname} </p> 
          <p>Name : {iscustomer.customer_email} </p> 
          <p>Name : {iscustomer.customer_mobile} </p> 
          <p>Name : {iscustomer.customer_address} </p> 
          <p>Name : {iscustomer.customer_comment} </p> 
          <p>Name : {iscustomer.customer_created} </p>
          <p>Name : {iscustomer.customer_par} </p>
        </div> : null      
      }
    </div>
  )
}
