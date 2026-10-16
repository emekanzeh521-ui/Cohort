import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contacts from "./assets/Pages/Contacts";
import Projects from "./assets/Pages/Projects";
import Services from "./assets/Pages/Services";
import Products from "./assets/Pages/Products";
import ProductDesc from "./assets/Components/ProductDesc";

import { ObjectProvider } from "./Context/ObjectContext";
function App() {
    return (
        <>
        <ObjectProvider>
         <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDesc/>} />           
            </Routes>
         </Router>
         </ObjectProvider>
        </>
    );
}
export default App;
