import imgView from '../../assets/img/overviewimg1.jpg'
import './ProductoLista.css'
import {useEffect, useState} from "react";
import {URL_API} from "../../utils";

function ListaProductos() {

    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    //Datos del producto
    const [categoria, setCategoria] = useState('');
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [kilos, setKilos] = useState('');
    const [idProducto, setIdProducto] = useState('');

    useEffect(() => {
        mostrarProductos()
        obtenerCategorias()
    }, []);

    const obtenerCategorias = () => {
        let url = `${URL_API}/api/categorias`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCategorias(data)
            })
    }
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

    const registrarProducto = (event) => {
        event.preventDefault();
        let rutaServicio = `${URL_API}/api/productos`
        document.querySelector("#insertModal .btn-close").click();
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("precio", precio);
        formData.append("cantidad", cantidad);
        formData.append("kilos", kilos);

        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                alert("Se ha registrado el producto " + nombre + " correctamente");
                mostrarProductos();
            })
    }

    const templateFormulario = () => {
        return (
            <div className="modal-body">
                <input type="hidden" className="form-control" value={idProducto}/>
                <div className="mb-3">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        className="form-control select-categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">Seleccione...</option>
                        {
                            categorias.map(cat =>
                                <option value={cat.id} key={cat.id}>{ cat.descripcion }</option>
                            )
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        type="text"
                        className='form-control'
                        placeholder='Nombre'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio">Precio</label>
                    <input
                        id="precio"
                        type="text"
                        className='form-control'
                        placeholder='Precio'
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="text"
                        className='form-control'
                        placeholder='Cantidad'
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="kilos">Kilos</label>
                    <input
                        id="kilos"
                        type="text"
                        className='form-control'
                        placeholder='Kilos'
                        value={kilos}
                        onChange={(e) => setKilos(e.target.value)}
                    />
                </div>
            </div>
        )
    }

    const mostrarInsertModal = () => {
        return (
            <div className="modal fade" id="insertModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={(e) => registrarProducto(e)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Registrar Prodcutos</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                { templateFormulario() }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="cart_overview">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
                            <div className="serach_btn">
                                <div className="coupon_btn text-center mb-3">
                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                            data-target="#insertModal">
                                        AGREGAR PRODUCTO <i className="icofont-ui-add"></i>
                                    </button>
                                </div>
                            </div>
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
                                        <tr key={producto.id}>
                                            <th scope="row">
                                                <div className="thamnail_img">
                                                    <img className="img-fluid" src={producto.imagen_table} alt=""/>
                                                </div>
                                            </th>
                                            <td className="align-middle"><b>{producto.nombre}</b></td>
                                            <td className="align-middle">S/{producto.precio}</td>

                                            <td className="align-middle">
                                                <div className="cart d-flex">
                                                    <div className="quantity d-flex">
                                                        <div className="left_arrow">
                                                            <button type="button"><i className="icofont-arrow-left"/>
                                                            </button>
                                                        </div>
                                                        <div className="quantity_num">{producto.cantidad}</div>
                                                        <div className="right_arrow">
                                                            <button type="button"><i
                                                                className="icofont-arrow-right"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="align-middle">{producto.categoria.descripcion}</td>
                                            <td className="align-middle">
                                                <i className="icofont-edit text-warning m-2"/>
                                                <i className="icofont-close text-danger m-2"/>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {mostrarInsertModal()}
        </>
    )
}

export default ListaProductos