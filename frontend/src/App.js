import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import CustomerHome from './components/CustomerHome';
import CustomerNavbar from './components/CustomerNavbar';
import CustomerCreate from './components/CustomerCreate';
import CustomerList from './components/CustomerList';
import CustomerDetail from './components/CustomerDetail';
import CustomerUpdate from './components/CustomerUpdate';

function App() {
  return (
    <>
      <CustomerNavbar />
      <Routes>
        <Route path="/" element={<CustomerHome />} />

        <Route path="/customer_list" element={<CustomerList />} />
        <Route path="/create" element={<CustomerCreate />} />
        
        {/* Just remember when you make link through other page, than home */}
        <Route path="/customer_list/update/:ids" element={<CustomerUpdate />} />       
        <Route path="/customer_list/detail/:ids" element={<CustomerDetail />} />       
      </Routes>
    </>
  )   
}

export default App;
