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
        formData.append("categoria_id", categoria)
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
                limpiarCampos()
                alert("Se ha registrado el producto " + nombre + " correctamente");
                mostrarProductos();
            })
    }

    const actualizarProducto = (event) => {
        event.preventDefault();
        let rutaServicio = `${URL_API}/api/productos-actualizar`
        document.querySelector("#actualizarModal .btn-close").click();
        const formData = new FormData();
        formData.append('id', idProducto)
        formData.append("categoria_id", categoria)
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
                limpiarCampos()
                alert("Se ha actualizado el producto " + nombre + " correctamente");
                mostrarProductos();
            })
    }

    const eliminarProducto = (event) => {
        event.preventDefault();
        let rutaServicio = `${URL_API}/api/productos-eliminar`
        document.querySelector("#eliminarModal .btn-close").click();
        const formData = new FormData();
        formData.append('id', idProducto)
        fetch(rutaServicio, {
            method: 'POST',
            body: formData
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                limpiarCampos()
                alert("Se ha eliminado el producto " + nombre + " correctamente");
                mostrarProductos();
            })
    }


    const llenarDatos = (item) => {
        setIdProducto(item.id);
        setCategoria(item.categoria_id)
        setNombre(item.nombre);
        setCantidad(item.cantidad);
        setPrecio(item.precio);
        setKilos(item.kilos)
    }

    const limpiarCampos = () => {
        setIdProducto('')
        setCategoria('')
        setNombre('')
        setPrecio('')
        setCantidad('')
        setKilos('')

    }

    const templateFormulario = () => {
        return (
            <div className="modal-body">
                <input type="hidden" className="form-control" value={idProducto}/>
                <div className="mb-3">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        className="input-form"
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
                        className='input-form'
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
                        className='input-form'
                        placeholder='Precio'
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id="cantidad"
                        type="number"
                        className='input-form'
                        placeholder='Cantidad'
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="kilos">Kilos</label>
                    <input
                        id="kilos"
                        type="number"
                        className='input-form'
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
                                <h5 className="modal-title" id="exampleModalLabel">Registrar Producto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                { templateFormulario() }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-close" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Registrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const mostrarActualizarModal = () => {
        return (
            <div className="modal fade" id="actualizarModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={(event) => actualizarProducto(event)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Actualizar Producto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                { templateFormulario() }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-close" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Editar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const mostrarEliminarModal = () => {
        return (
            <div className="modal fade" id="eliminarModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={(event) => eliminarProducto(event)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Eliminar Producto</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Estas a punto de eliminar el producto { nombre }. ¿Desea continuar?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn-close" data-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Eliminar</button>
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
                                                <i
                                                    className="icofont-edit text-warning m-2"
                                                    data-toggle="modal"
                                                    data-target="#actualizarModal"
                                                    onClick={(e) => llenarDatos(producto)} />
                                                <i
                                                    className="icofont-close text-danger m-2"
                                                    data-toggle="modal"
                                                    data-target="#eliminarModal"
                                                    onClick={(e) => llenarDatos(producto)}/>
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
            {mostrarActualizarModal()}
            {mostrarEliminarModal()}
        </>
    )
}

export default ListaProductos