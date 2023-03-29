import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function CustomerCreate() {

  const navigate =useNavigate();
  
  const [customerInfo, setCustomerInfo] = useState({

    //! Left side of colon are DB names in structure
    customer_contractnr:'', 
    customer_fullname:'', 
    customer_email:'', 
    customer_mobile:'',
    customer_address:'',
    customer_comment:'',
    customer_par:'', 
  });

  const onChangeValue = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]:e.target.value
    })
  }

  //? Submit Form
  const submitCustomer = async (event) => {
    try{
      event.preventDefault();
      event.persist();

      axios.post(`http://localhost/fclager/fclager_v05/backend/customer_create.php`, {

        //! Left side value names come from created values in api, 
        //! Right side values added to useState hook are DB structure values
        customerContractnr: customerInfo.customer_contractnr, 
        customerFullname: customerInfo.customer_fullname, 
        customerEmail: customerInfo.customer_email, 
        customerMobile: customerInfo.customer_mobile, 
        customerAddress: customerInfo.customer_address, 
        customerComment: customerInfo.customer_comment, 
        customerPar: customerInfo.customer_par,
      })
      .then(res => {
        
        console.log(res.data);

        navigate('/customer_list');
        return;

      })

    }catch(error){
      throw error;
    }

  }

  return (
    <div className='container col-6'>
      <h3 className='mt-4'> + Opret ny kunde</h3>
      <form 
        onSubmit = {submitCustomer} 
         >
        <div className='mb-3'>

          <label
            className='form-label fw-semibold'
            htmlFor="_customer_contractnr"          
            > Kontraktnr. :
          </label>
          <input
            type="text"
            className='form-control mb-3'
            id="_customer_contractnr"
            name="customer_contractnr"
            onChange={onChangeValue}
            placeholder="Skriv kontraktnr. fks. 2015P-2023"
            autoComplete="off"
            required
          >
          </input>
        
          <label
            className='form-label fw-semibold'
            htmlFor="_customer_fullname"          
            > Fulde navn :
          </label>
          <input
            type="text"
            className='form-control mb-3'
            id="_customer_fullname"
            name="customer_fullname"
            onChange={onChangeValue}
            placeholder="Skriv dit fulde navn"
            autoComplete="off"
            required
          >
          </input>

          <label
            className='form-label fw-semibold'
            htmlFor="_customer_email"          
            > Email :
          </label>
          <input
            type="email"
            className='form-control mb-3'
            id="_customer_email"
            name="customer_email"
            onChange={onChangeValue}
            placeholder="Skriv din email fks. hs@fclager.dk"
            autoComplete="off"
            required
          >
          </input>

          <label
            className='form-label fw-semibold'
            htmlFor="_customer_mobile"          
            > Mobiltelefon :
          </label>
          <input
            type="number"
            className='form-control mb-3'
            id="_customer_mobile"
            name="customer_mobile"
            onChange={onChangeValue}
            placeholder="Skriv dit mobiltelefon nummer"
            autoComplete="off"
            required
          >
          </input>

          <label
            className='form-label fw-semibold'
            htmlFor="_customer_address"          
            > Adresse :
          </label>
          <input
            type="text"
            className='form-control mb-3'
            id="_customer_address"
            name="customer_address"
            onChange={onChangeValue}
            placeholder="Skriv din adresse"
            autoComplete="off"
            required
          >
          </input>
    
          <label
            className='form-label fw-semibold'
            htmlFor="_customer_comment"          
            > Notater :
          </label>
          <textarea
            type="text"
            className='form-control mb-3'
            id="_customer_comment"
            name="customer_comment"
            onChange={onChangeValue}
            placeholder="Notater..."
            autoComplete="off"
            required
          >
          </textarea>
  
          <label
            className='form-label fw-semibold'
            htmlFor="_customer_par"          
            > Par :
          </label>
          <input
            type="text"
            className='form-control mb-3'
            id="_customer_par"
            name="customer_par"
            onChange={onChangeValue}
            placeholder="Par..."
            autoComplete="off"
            required
          >
          </input>
          
        </div>
        <input
          type="submit"
          value="create"
          className='btn btn-success'
        ></input>
      </form>      
    </div>
  )
}
