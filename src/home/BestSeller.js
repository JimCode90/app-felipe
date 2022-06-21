import imgProd1 from '../assets/img/productos/1.jpg'
function BestSeller() {
    return (
        <>
            <div className="full-bestSeller mt-5" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="section-title">Our Best Seller Product</h3>
                            <p className="section-subtitle">The passage experienced a surge in popularity during the
                                1960s when again during the 90s as desktop publishers</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                            <div className="product">
                                <div className="product-img">
                                    <img className="w-100" src={imgProd1} alt="" />
                                </div>
                                <div className="product-content">
                                    <div className="product-details position-bottom-left">
                                        <h3 className="product-name"><a href="productdetails.html">Musk Melon</a></h3>
                                        <span className="product-prev-price">$80 KG</span>
                                        <span className="product-price">$78 KG</span>
                                    </div>
                                    <div className="buttons">
                                        <span className="sold-out-tag position-top-right">Sold out</span>
                                        <button className="btn custom-btn position-bottom-right"> Add to cart</button>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller