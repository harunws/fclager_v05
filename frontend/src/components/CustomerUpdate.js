import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import CustomerUpdateForm from "./CustomerUpdateForm";

export default function CustomerUpdate() {

  let params = useParams(); 

  useEffect( () => {
    window.scrollTo(0, 0);
   updateCustomerList(params.ids);
  }, [params.ids]); 
  //! Dependency "params.ids" not include in tut_src in array [params.ids] added after react warning.

  const [iscustomer, setIsCustomer] = useState([]);
  const [isloadcustomer, setIsLoadCustomer] = useState(false);

  const updateCustomerList = async (ids) => {
    try {
      axios.post(`http://localhost/fclager/fclager_v05/backend/customer_read_single.php`, { 
       
        customerIds: ids,
      })
      .then(res => {

        console.log(res.data.customerlist.customerdata)

        setIsCustomer(res.data.customerlist.customerdata[0]);

        setIsLoadCustomer(true);
       
      })
    } catch (error) { throw error;}    
  }

  return (
    <div>
    {isloadcustomer && 

      < CustomerUpdateForm list={iscustomer} />
    }
    </div>
  );
};
