import imgView from '../../assets/img/overviewimg1.jpg'
function ListaProductos() {
    return (
        <>
            <div className="cart_overview">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
                            <table className="table">
                                <thead>
                                <tr className="cartoverview_title">
                                    <th>IMAGES</th>
                                    <th>PRODUCT</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>TOTAL</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">
                                        <div className="thamnail_img">
                                            <img className="img-fluid" src={ imgView } alt=""/>
                                        </div>
                                    </th>
                                    <td className="align-middle"><b>Strawberry</b></td>
                                    <td className="align-middle">$590</td>

                                    <td className="align-middle">
                                        <div className="cart d-flex">
                                            <div className="quantity d-flex">
                                                <div className="left_arrow">
                                                    <button type="button"><i className="icofont-arrow-left"></i>
                                                    </button>
                                                </div>
                                                <div className="quantity_num">1</div>
                                                <div className="right_arrow">
                                                    <button type="button"><i className="icofont-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="align-middle">$5980</td>
                                    <td className="align-middle"><i className="icofont-close text-danger"></i></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaProductos