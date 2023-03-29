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

    <div className='d-flex justify-content-center'>      
      {/* Card Start */}
      <div className="col-9 mt-4">
        <div className="col">
          <div className="card h-400">
            <img src="..." className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title fs-3">Lejer info</h5>
              { iscustomer ? 
                <div>
                  {/* Here find a solution for index */}
                  {/* <p> # {iscustomer.customer_id}</p> */}

                  <p className="card-text"><span className='fw-semibold'> Kontraktnr :</span> {iscustomer.customer_contractnr} </p> 
                  <p className="card-text"><span className='fw-semibold'> Navn :</span> {iscustomer.customer_fullname} </p> 
                  <p className="card-text"><span className='fw-semibold'> Email :</span> {iscustomer.customer_email} </p> 
                  <p className="card-text"><span className='fw-semibold'> Mobile :</span> {iscustomer.customer_mobile} </p> 
                  <p className="card-text"><span className='fw-semibold'> Adresse :</span> {iscustomer.customer_address} </p>                 
                  <p className="card-text"><span className='fw-semibold'> Kommuntar:</span> <br/> {iscustomer.customer_comment} </p>                  

                  <div className="card-footer">
                    <small className="text-body-secondary">Oprettet : {iscustomer.customer_created} </small>
                    <small className="text-body-secondary"> Par : {iscustomer.customer_par}</small>
                  </div>
                </div> : null      
              }
            </div>            
          </div>
        </div>  
      </div>
       {/* Card End */}

    </div>
  )
}
