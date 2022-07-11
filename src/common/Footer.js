

function Footer() {
    return (
        <>
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
                            <div className="footer_widget">
                                <div className="footer_widget_title">
                                    <h2>¡Contáctenos!</h2>
                                </div>
                                <ul className="footer_widget_content">
                                    <li><span>Teléfono: &nbsp;&nbsp;&nbsp;&nbsp;</span>+000 333 879 788</li>
                                    <li><span>Correo Electrónico: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> soporte@gmail.com</li>
                                    <li><span>Dirección: &nbsp;</span> king street,avenue</li>
                                </ul>
                                <div className="footer_social">
                                    <ul className="footer_social_icons">
                                        <li><a href="#"><i className="icofont-skype"></i></a></li>
                                        <li><a href="#"><i className="icofont-facebook"></i></a></li>
                                        <li><a href="#"><i className="icofont-twitter"></i></a></li>
                                        <li><a href="#"><i className="icofont-whatsapp"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
                            <div className="footer_widget">
                                <div className="footer_widget_title">
                                    <h2>Atención Al Cliente</h2>
                                </div>
                                <ul className="footer_widget_content">
                                    <li><i className="icofont-double-right"></i><a href="#">Sobre Nosotros</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Política De Privacidad</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Términos Y Condiciones</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Devoluciones De Productos</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Política Al Por Mayor</a></li>
                                </ul>
                            </div>
                        </div>                     
                        
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
                            <div className="footer_widget">
                                <div className="footer_widget_title">
                                    <h2>Enlaces Rápidos</h2>
                                </div>
                                <ul className="footer_widget_content">
                                    <li><i className="icofont-double-right"></i><a href="#">Paginación</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Términos Y Condiciones</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Contacto</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Accesorios</a></li>
                                    <li><i className="icofont-double-right"></i><a href="#">Terminos De Uso</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                            <div className="footer_txt text-center">
                                <p>Copyright 2022 <span>Luis Felipe</span>. Todos los derechos reservados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer