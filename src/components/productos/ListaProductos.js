import imgView from '../../assets/img/overviewimg1.jpg'
import {useEffect, useState} from "react";
function ListaProductos() {

    const [productos, setProductos] = useState([]);
    useEffect(() => {
        mostrarProductos()
    }, []);

    const mostrarProductos = () => {
        let url = "http://api-felipe.test/api/productos"
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
            <div className="cart_overview">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
                            <table className="table">
                                <thead>
                                <tr className="cartoverview_title">
                                    <th>IMAGEN</th>
                                    <th>PRODUCTO</th>
                                    <th>PRECIO</th>
                                    <th>CANTIDAD</th>
                                    <th>CATEGORIA</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    productos.map(producto =>
                                        <tr>
                                            <th scope="row">
                                                <div className="thamnail_img">
                                                    <img className="img-fluid" src={ producto.imagen_table } alt=""/>
                                                </div>
                                            </th>
                                            <td className="align-middle"><b>{ producto.nombre }</b></td>
                                            <td className="align-middle">S/{ producto.precio }</td>

                                            <td className="align-middle">
                                                <div className="cart d-flex">
                                                    <div className="quantity d-flex">
                                                        <div className="left_arrow">
                                                            <button type="button"><i className="icofont-arrow-left"></i>
                                                            </button>
                                                        </div>
                                                        <div className="quantity_num">{ producto.cantidad }</div>
                                                        <div className="right_arrow">
                                                            <button type="button"><i className="icofont-arrow-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">{ producto.categoria.descripcion }</td>
                                            <td className="align-middle"><i className="icofont-close text-danger"></i></td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaProductos