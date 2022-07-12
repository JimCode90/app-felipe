import imgBlog from '../../assets/img/blog2.jpg'
import { useEffect, useState } from "react";
import {URL_API} from "../../utils";

function ListaBlogs() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        mostrarBlogs()
    }, []);

    const mostrarBlogs = () => {
        let url = `${URL_API}/api/blogs`
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBlogs(data)
            })
    }

    return (
        <>
            <div className="blog_part">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="allpost_content">
                                        <div className="serach_btn">
                                            <form action="#">
                                                <div className="search_ber">
                                                    <input type="text" className="form-control search_button"
                                                        id="serach_button" name="serach_button" value=""
                                                        placeholder="Busca aquí" />
                                                    <i className="icofont-search-1"></i>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="post_category">
                                            <div className="sidebar">
                                                <h4 className="border-0">Categorías Publicaciones</h4>
                                            </div>
                                            <ul className="list-group">
                                                <li className="list-group-item list_icon"><a href="#"><i
                                                    className="icofont-arrow-right"></i>Productos Destacados</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="recent_post">
                                        <div className="sidebar">
                                            <h4>Publicaciones Recientes</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <span>20 April 2022</span>
                                                <h4><a href="blogdetails.html">Las fresas son plantas herbáceas de bajo crecimiento.</a></h4>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="populer_tag">
                                        <div className="sidebar">
                                            <h4 className="border-0">Etiquetas Populares</h4>
                                        </div>
                                        <div className="populer_btn">
                                            <ul>
                                                <li>Agencia</li>
                                                <li>Negocio</li>
                                                <li>Alimentos orgánicos</li>
                                                <li>Granjero</li>
                                                <li>Marketing</li>
                                                <li>Compañía</li>
                                                <li>Alimento</li>
                                                <li>Servicios</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                            <div className="row">
                                {
                                    blogs.map(blog =>
                                        <div className="col-xs-12 col-sm-12 col-md-12 mt-4">
                                            <div className="blog">
                                                <div className="blog_img">
                                                    <img src={blog.image} className="w-100 img-fluid" alt="jpgimg" />
                                                </div>
                                                <div className="blog_publish d-flex justify-content-between pt-4">
                                                    <div className="date">
                                                        <span><i className="icofont-ui-calendar"></i> {blog.created_at}</span>
                                                    </div>
                                                    <div className="date">
                                                        <span><i className="icofont-ui-theme"></i> {blog.categoria.descripcion}</span>
                                                    </div>
                                                    <div className="fav_icon">
                                                        <span><i className="icofont-ui-love"></i> {blog.likes}</span>
                                                        <span><i className="icofont-speech-comments"></i> {blog.comentarios.length}</span>
                                                    </div>
                                                </div>
                                                <div className="blog_title text-uppercase">
                                                    <h4><a href="blogdetails.html">{blog.titulo}</a></h4>
                                                    <a href="blogdetails.html" className="underline">Ver más</a>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaBlogs