import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';
import { Toaster } from 'react-hot-toast';
import Detailpage from './page/Detailpage/Detailpage';
import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';

import Booking from './page/Booking/BookingDesktop';
import Register from './page/Register/Register';
import UserPage from './UserPage/UserPage';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center"
      reverseOrder={false}/>
      <Spinner/>
      <Routes>
        {/* user route */}
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<Detailpage/>}/>
          <Route path='/booking/:idBooking' element={<Booking/>}/>
        </Route>
        {/* admin route */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="users" element={<UserPage/>}></Route>
        </Route>
        <Route path='/' element={<Layout></Layout>}>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<Register/>}/> 
        </Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//template