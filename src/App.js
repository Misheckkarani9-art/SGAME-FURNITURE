import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';


// Pages
import Signup from './components/Signup';
import Signin from './components/Signin';
import Getproduct from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Makepayment from './components/Makepayment';
import CategoryProducts from "./components/CategoryProducts";

import Notfound from './components/Notfound';

import { useState } from 'react';

import Profile from './components/Profile';
import Home from './components/Home';
import Deals from './components/Deals';
import Orders from './components/Orders';
import News from './components/News';

function App() {
  // Lifted search state
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="App">

        {/* Navbar with search */}
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        


        {/* Carousel */}
       

        {/* Routes */}
        <Routes>
          <Route path ='/' element ={<Home/>}/>
          <Route 
            path="/getproduct" 
            element={<Getproduct searchQuery={searchQuery} />} 
          />
          <Route path="/addproducts" element={<Addproducts />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/deals" element={<Deals/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/news" element={<News/>} />

         
          
          <Route path="/category/:category" element={<CategoryProducts />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;