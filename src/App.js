import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./home/Home";
import Header from "./common/Header";
import Productos from "./components/productos/Productos";
import Blog from "./components/blogs/Blog";
import Footer from "./common/Footer";
import ProductosLista from "./components/mantenimiento/ProductosLista";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="/blogs" element={<Blog/>}/>
                <Route path="/mantenimiento" element={<ProductosLista/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
