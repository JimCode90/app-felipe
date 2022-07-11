
import imgBanner from '../assets/img/banner.jpg'
function Banner() {

    return (
        <>
            <div className="full-banner" style={{
                background: `url(${imgBanner})`
            }}>
                <div className="container">
                    <div className="row banner-slider">
                        <div className="col-md-12">
                            <div className="banner-content">
                                <h1>100% <span>Orgánico</span></h1>
                                <h3>Alimentos de Granja Frescos y Naturales</h3>
                                <p>¡Tenemos los mejores alimentos orgánicos para ti!</p>
                                <a href="#" className="btn ">Todos los productos<i className="icofont-bubble-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner