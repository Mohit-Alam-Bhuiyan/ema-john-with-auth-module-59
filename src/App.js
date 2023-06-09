import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/inventory" element={
        <RequireAuth>
              <Inventory/>
        </RequireAuth>
      } />
      <Route path="/shipment" element={
        <RequireAuth>
            <Shipment/>
      </RequireAuth>
      } />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    </div>
  );
}


export default App;
