import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage/HomePage';
import LoginPage from './page/LoginPage/LoginPage';
import { Toaster } from 'react-hot-toast';
import Detailpage from './page/Detailpage/Detailpage';
import Layout from './layout/Layout';
import AdminLayout from './layout/AdminLayout';
import UserPage from './UserPage/UserPage';
import Booking from './page/Booking/Booking';
import Register from './page/Register/Register';

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center"
      reverseOrder={false}/>
      <Routes>
        {/* user route */}
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/detail/:id' element={<Detailpage/>}/>
          <Route path='/booking' element={<Booking/>}/>
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