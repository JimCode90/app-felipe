import imgNewg1 from '../assets/img/news/news1.jpg'
import imgNewg2 from '../assets/img/news/news2.jpg'
import imgNewg3 from '../assets/img/news/news3.jpg'


function FullLastestNews() {
    return (
        <>
            <div className="full-latest-news">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="section-title">Latest News</h3>
                            <p className="section-subtitle">The passage experienced a surge in popularity during the
                                1960s when again during the 90s as desktop publishers</p>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="latest-news-grid">
                                <div className="news-img">
                                    <img className="w-100" src={ imgNewg1 } alt="" />
                                </div>

                                <div className="news-content">
                                    <div className="date-react">
                                        <span className="date">16 January’20</span>
                                        <span className="react"><i className="icofont-ui-love"></i> 56</span>
                                        <span className="react"><i className="icofont-speech-comments"></i> 98</span>
                                    </div>
                                    <div className="news-title">
                                        <a href="blogdetails.html"><h4>The passage experienced a popularity during the
                                            used it on their dry-transfer sheets.</h4></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="latest-news-list d-flex">
                                <div className="news-img">
                                    <img className="w-100" src={ imgNewg2 } alt="" />
                                </div>

                                <div className="news-content">
                                    <div className="date-react">
                                        <span className="date">16 January’20</span>
                                        <span className="react"><i className="icofont-ui-love"></i> 56</span>
                                        <span className="react"><i className="icofont-speech-comments"></i> 98</span>
                                    </div>
                                    <div className="news-title">
                                        <a href="blogdetails.html"><h4>The passage popularity dry transfer sheets.</h4>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="latest-news-list d-flex">
                                <div className="news-img">
                                    <img className="w-100" src={ imgNewg3 } alt="" />
                                </div>

                                <div className="news-content">
                                    <div className="date-react">
                                        <span className="date">16 January’20</span>
                                        <span className="react"><i className="icofont-ui-love"></i> 56</span>
                                        <span className="react"><i className="icofont-speech-comments"></i> 98</span>
                                    </div>
                                    <div className="news-title">
                                        <a href="blogdetails.html"><h4>The passage popularity dry transfer sheets.</h4>
                                        </a>
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

export default FullLastestNews