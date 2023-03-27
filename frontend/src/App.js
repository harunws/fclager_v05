import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import CustomerHome from './components/CustomerHome';
import CustomerNavbar from './components/CustomerNavbar';

function App() {
  return (
    <>
      <CustomerNavbar />
      <Routes>
        <Route path="/" element={<CustomerHome />} />
      </Routes>
    </>
  )   
}

export default App;
