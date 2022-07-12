import './CatalogoProductos.css'
import {useEffect, useState} from "react";
import {URL_API} from "../../utils";

function CatalogoProductos() {

    const [productos, setProductos] = useState([]);
    const [filtroProducto, setFiltroProducto] = useState('');

    useEffect(() => {
        mostrarProductos()
    }, []);

    const mostrarProductos = () => {
        let url = `${URL_API}/api/productos`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProductos(data)
            })
    }
    return (
        <>
            <div className="full-bestSeller mt-5" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="section-title">Nuestro Producto Más Vendido</h3>
                            <p className="section-subtitle">El Pasaje Experimentó Un Aumento De Popularidad Durante La Década De 1960 Cuando Nuevamente Durante La Década De 1990 Como Editores De Escritorio.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="filtro">Filtrar Productos</label>
                                <input
                                    type="text"
                                    className="input-filtro"
                                    placeholder="Filtrar productos"
                                    id="filtro"
                                    onChange={(e) => setFiltroProducto(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        {
                            productos.filter(prod => prod.nombre.toLowerCase().includes(filtroProducto)).map(producto =>
                                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4" key={producto.id }>
                                    <div className="product">
                                        <div className="product-img">
                                            <img className="w-100" src={ producto.imagen } alt="" />
                                        </div>
                                        <div className="product-content">
                                            <div className="product-details position-bottom-left">
                                                <h3 className="product-name"><a href="productdetails.html">{ producto.nombre }</a></h3>
                                                <span className="product-prev-price">{ producto.kilos } KG</span>
                                                <span className="product-price">S/{ producto.precio }</span>
                                            </div>
                                            <div className="buttons">
                                                <span className="sold-out-tag position-top-right">{ producto.categoria.descripcion }</span>
                                            </div>

                                            <div className="icons position-center">
                                                <div className="rounded-icon">
                                                    <i className="icofont-eye"></i>
                                                </div>

                                                <div className="rounded-icon">
                                                    <i className="icofont-heart-alt"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default CatalogoProductos