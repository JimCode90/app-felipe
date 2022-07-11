import {Link} from "react-router-dom";


function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html">
                <img src="img/logo.png" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <i className="icofont icofont-navigation-menu"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">INICIO</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/productos">PRODUCTOS</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/blogs">BLOGS</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/mantenimiento">MANTENIMIENTO</Link>
                    </li>
                </ul>
                <div className="header-content">
                    <div className="header_contact text-right">
                        <span>¡Llamanos!</span>
                        <span className="phone_no">+00 569 846 348</span>
                    </div>
                    <div className="header_icon">
                        <i className="icofont icofont-cart"></i>
                        <span className="cart_no">02</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar