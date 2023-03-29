import React from 'react';
import axios from 'axios';

import { useParams, Link } from 'react-router-dom';
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
        <img src="..." className="card-img-top" alt=""/>            
          { iscustomer ? 
            <div>                   
              <div className="card border-secondary mb-3" >
                <div 
                  className="
                    card-header 
                    bg-transparent 
                    border-secondary
                    text-secondary
                  ">
                  <span className=''>Kontraktnr :{iscustomer.customer_contractnr}</span>
                  <Link to="/customer_list" >
                  <span className='ms-5'> 
                    <i class="bi bi-box-arrow-left text-info fs-5"></i>
                  </span>
                  </Link>

                  <span className='ms-2'>
                    {/* Try to find out to set edit link here, maybe props */}                   
                    <i className='bi bi-pencil-fill mx-1 text-primary mx-3'/> 
                  </span>
                  
                  <span className='ms-2'>
                    {/* Try to find out to set edit link here, maybe props */}
                    <i className='bi bi-trash3-fill text-danger'/>
                  </span>
                </div>               

                <div className="card-body text-secondary">
                  <h5 className="card-title">
                    {iscustomer.customer_fullname}
                  </h5>

                    {/* Here find a solution for index */}
                  {/* <p> # {iscustomer.customer_id}</p> */} 
                  <p className="card-text">
                    <span className='fw-semibold'>Email :</span> 
                    {iscustomer.customer_email} 
                  </p> 
                  <p className="card-text">
                    <span className='fw-semibold'>Mobile :</span> 
                    {iscustomer.customer_mobile} 
                  </p> 
                  <p className="card-text">
                    <span className='fw-semibold'>Adresse :</span> 
                    {iscustomer.customer_address} 
                  </p>                 
                  <p className="card-text">
                    <span className='fw-semibold'> 
                    Kommuntar:</span>
                    <br/>{iscustomer.customer_comment} 
                  </p>  

                </div>

                <div className="
                  card-footer 
                  bg-transparent 
                  border-secondary                
                  text-secondary
                ">
                  <small className="text-body-secondary">
                    Opdateret : {iscustomer.customer_created} 
                  </small>
                  <small className="text-body-secondary ms-5"> 
                    Par : {iscustomer.customer_par}
                  </small>                    
                </div>
              </div>
            </div> : null 
          }          
      </div>
      {/* Card End */}
    </div>
  )
}
