
import imgBanner from '../../assets/img/product_hero_section_bg.jpg'

function HeroSection() {
    return (
        <>
            <div className="hero_section" style={{
                background: `url(${imgBanner})`
            }}>
                <div className="png_img"><img className="img-fluid" src="img/leaf.png" alt=""/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="herosection_content">
                                <h2>Cart Overview</h2>
                                <a href="index.html" className="btn border-radius-0 border-transparent">Home - Pages</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection