import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from "./Pages/Shop";
import SchopCategory from "./Pages/SchopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer.jsx/Footer";
function App() {
 

  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<SchopCategory category="men" />} />
          <Route path="/womens" element={<SchopCategory category="women" />} />
          <Route path="/kids" element={<SchopCategory category="kid"/>} />
          <Route path="/product/:id" element={<Product/>}/>
            
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
