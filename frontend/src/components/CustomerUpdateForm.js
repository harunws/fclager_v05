import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

export default function CustomerUpdateForm({list}) {

  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    
    // ! name for values are both side from DB
    customer_contractnr: list.customer_contractnr,
    customer_fullname: list.customer_fullname,
    customer_email: list.customer_email,
    customer_mobile: list.customer_mobile,
    customer_address: list.customer_address,
    customer_comment: list.customer_comment,
    customer_par: list.customer_par,
  });

  const onChangeValue = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]:e.target.value
    });
  } 

  // Inserting a new user into the Database.
  const submitCustomer = async(event) => {

    try {
      event.preventDefault();
      event.persist();

      axios.post(`http://localhost/fclager/fclager_v05/backend/customer_update.php`, { 

        // ! Values on left side are given names from api php file, on right side from DB structure
        customerContractnr: customerInfo.customer_contractnr,
        customerFullname: customerInfo.customer_fullname,
        customerEmail: customerInfo.customer_email,
        customerMobile: customerInfo.customer_mobile,
        customerAddress: customerInfo.customer_address,
        customerComment: customerInfo.customer_comment,
        customerPar: customerInfo.customer_par,        
        customerids: list.customer_id,
      })
      .then(res => {
        console.log(res.data);
        navigate(`/customer_list`);
        return;
      })
    } catch (error) { throw error;}    
  };

  return (
    <div className="container col-6 "> 
      <form className="container" onSubmit={submitCustomer}>
        <div className='mb-3'>
          <h3> Update Customer Form</h3>

          <label htmlFor="_customer_contractnr" className='form-label fw-semibold'> Kontraktnr.</label>
          <input          
            type="text"
            className='form-control'
            id="_customer_contractnr"
            name="customer_contractnr"
            value={customerInfo.customer_contractnr}
            onChange={onChangeValue}
            placeholder="Skriv kontraktnr. fks. 2015P-2023"
            autoComplete="off"
            required          
          /> 
        
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
            value={customerInfo.customer_fullname}
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
            value={customerInfo.customer_email}
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
            value={customerInfo.customer_mobile}
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
            value={customerInfo.customer_address}
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
            value={customerInfo.customer_comment}
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
            value={customerInfo.customer_par}
            onChange={onChangeValue}
            placeholder="Par..."
            autoComplete="off"
            required
          >
          </input>
        </div>
        <input 
          type="submit" 
          value="update" 
          className='btn btn-success btn-sm'
        />
        <button className='btn btn-secondary btn-sm ms-3'>
          <Link to="/customer_list"/> Annuller 
        </button>               
      </form>
    </div>
  );
}
