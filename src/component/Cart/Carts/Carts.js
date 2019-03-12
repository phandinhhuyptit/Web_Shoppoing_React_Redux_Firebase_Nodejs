import React, { Component } from 'react';

class Carts extends Component {
    render() {
        return (
            <tr>
                <td className="d-none d-lg-table-cell"><img src="https://www.playzone.vn/image/cache/catalog/san%20pham/steelseries/ban-di/qck-pubg/1-90x90.jpg" aria-hidden alt="Card image cap" className="img-fluid" />
                </td>
                <td>
                    <a href="546" className="Nanme_Products"> Bàn Di Chuột Qck+ Miramar PUBG Edition</a>
                </td>
                <td className="d-none d-md-table-cell">
                    <b className="price_products">480.000 đ</b>
                </td>
                <td>
                    <div className="input-group Quantity d-flex justify-content-center  ">
                        <span className="input-group-btn d-none d-lg-block">
                            <button type="button" className="btn btn-primary Minus_Quantity">-</button>
                        </span>
                        <input type="number" defaultValue={1} min={0} className="form-group" />
                        <span className="input-group-btn d-none d-lg-block ">
                            <button type="button" className="btn btn-primary Plus_Quantity">+</button>
                        </span>
                    </div>
                </td>
                <td className="d-none d-md-table-cell">
                    <b className="price_total">480.000 đ</b>
                </td>
                <td className="text-center">
                    <a name id className="btn btn-primary refresh" href="5436" role="button"><i className="fas fa-sync-alt" /></a>
                    <a name id className="btn btn-primary remove" href="5768" role="button">
                        <i className="fas fa-times" />
                    </a>
                </td>
            </tr>
        );
    }
}

export default Carts;