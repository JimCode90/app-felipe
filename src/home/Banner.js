
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
                                <h1>100% <span>Organic</span></h1>
                                <h3>Fresh & Natural Farm Food</h3>
                                <p>The readable content of a page when looking at its layout point of using of letters,
                                    as opposed.</p>
                                <a href="#" className="btn ">ALL PRoducts <i className="icofont-bubble-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner