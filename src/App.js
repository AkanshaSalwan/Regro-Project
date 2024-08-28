import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Listing from './pages/Listing/listing';



function App() {
  return (
   <>
   <BrowserRouter>
        <Header />
        <Routes>
            <Route exact={true} path="/" element={<Home />}/>
            <Route exact={true} path="/listing" element={<Listing />}/>
        </Routes>
        <Footer></Footer>
   </BrowserRouter>
   
   
   
   </>
  
  );
}

export default App;
