
import imgBlog from '../../assets/img/blog2.jpg'

function ListaBlogs() {
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
                                                           placeholder="Search Here"/>
                                                    <i className="icofont-search-1"></i>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="post_category">
                                            <div className="sidebar">
                                                <h4 className="border-0">Categorias Posts</h4>
                                            </div>
                                            <ul className="list-group">
                                                <li className="list-group-item list_icon"><a href="#"><i
                                                    className="icofont-arrow-right"></i>Feature Products</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="recent_post">
                                        <div className="sidebar">
                                            <h4>Posts Recientes</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <span>20 April 2020</span>
                                                <h4><a href="blogdetails.html">Strawberries are low-growing herbaceous
                                                    plants.</a></h4>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="populer_tag">
                                        <div className="sidebar">
                                            <h4 className="border-0">Tags Populares</h4>
                                        </div>
                                        <div className="populer_btn">
                                            <ul>
                                                <li>Agency</li>
                                                <li>Business</li>
                                                <li>Organic Food</li>
                                                <li>Farmer</li>
                                                <li>Marketing</li>
                                                <li>Company</li>
                                                <li>Food</li>
                                                <li>Services</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 mt-4">
                                    <div className="blog">
                                        <div className="blog_img">
                                            <img src={imgBlog} className="w-100 img-fluid" alt="jpgimg"/>
                                        </div>
                                        <div className="blog_publish d-flex justify-content-between pt-4">
                                            <div className="date">
                                                <span><i className="icofont-ui-calendar"></i> 20 April 2020</span>
                                            </div>
                                            <div className="fav_icon">
                                                <span><i className="icofont-ui-love"></i> 568</span>
                                                <span><i className="icofont-speech-comments"></i> 986</span>
                                            </div>
                                        </div>
                                        <div className="blog_title text-uppercase">
                                            <h4><a href="blogdetails.html">Strawberries are low-growing herbaceous
                                                plants with a fibrous root system and a crown from which arise basal
                                                leaves.</a></h4>
                                            <a href="blogdetails.html" className="underline">Read More</a>
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
export default ListaBlogs