import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function CustomerList() {

  const [iscustomer, setIsCustomer] = useState([]);  
  const allCustomer = async (ids) => 
  {
    try
    {      
      axios.get(`http://localhost/fclager/fclager_v05/backend/customer_read_all.php`)
      .then(res => {
        setIsCustomer(res.data.customerlist.customerdata);
       
      })
    }
    catch(error)
    {
      throw error;
    }
  }

  useEffect(() => {
    allCustomer();
  }, []); 

  //? Delete confirm Message;
  const deleteConfirm = (id) => {
    if(window.confirm("Are you sure?")){
      deleteCustomer(id);
    }
  }

  //? Delete function;  
  const deleteCustomer = async (id)=>{
    // console.log(id);
    try
    {
      axios.post(`http://localhost/fclager/fclager_v05/backend/customer_delete.php`,
      {
        customerids:id,
      })
      .then(res => {
        setIsCustomer([]);
        allCustomer();
        return;
      })
    }
    catch (error)
    {
      throw error;
    }
  }

  return (
    <div className='container col-12'>

       <div className="d-flex justify-content-end mt-4">
        {/* Check her again. to="/insert" seems not correct */}
        <Link to="/create"
          className='btn btn-outline-info btn-sm'        
        > +Tiføj Ny</Link> 
      </div>

      <h3 className=''>Lejeriste</h3>     
      <table className="table">

        <thead>
          <tr>
            <th scope="col">#Id</th>           
            <th scope="col">Kontraktnr</th>
            <th scope="col">Navn</th>
            <th scope="col">Email</th>
            <th scope="col">Mobil</th>
            <th scope="col">Adresse</th>
            <th scope="col">Kommenter</th>
            <th scope="col">Oprettelse</th>
            <th scope="col">Par</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            iscustomer.map((item, index) =>(

              <tr key={item.customer_id}>
              <td>{index}</td>
              <td>{item.customer_contractnr} </td>
              <td>{item.customer_fullname} </td>
              <td>{item.customer_email} </td>
              <td>{item.customer_mobile} </td>          
              <td>{item.customer_address} </td>          
              <td>{item.customer_comment} </td>          
              <td>{item.customer_created} </td>          
              <td>{item.customer_par} </td>          
              <td>
                <Link to={`detail/${item.customer_id}`}
                  className='bi bi-eye-fill text-info'
                />

                <Link to={`update/${item.customer_id}`}
                  className='bi bi-pencil-fill mx-1 text-primary mx-3'
                />
                {/* <Link to={`update/${item.user_id}`} */}

                 <Link to 
                  className='bi bi-trash3-fill text-danger'
                  onClick = {() => deleteConfirm(item.customer_id)}
                />
                
              </td> 
            </tr>
            ))            
          }
        </tbody>
      </table>
    </div>
  )
}
