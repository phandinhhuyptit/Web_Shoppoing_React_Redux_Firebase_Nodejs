import React, { Component } from 'react';
import './Title_Product.css';


class TitleProduct extends Component {
    render() {
        return (
            <div className="col-12 Header_Items">
                <div className="View_Icon">
                    <a className="Grid_View_Icon">

                        <i class="fas fa-th"></i>

                    </a>
                    <a className="List_View_Icon">

                        <i class="fas fa-list"></i>

                    </a>
                </div>

                <div className="form-group Size_Form">

                    <select className="custom-select background_image_of_Select" required>
                        <option value>Giá (Thấp &gt; Cao)</option>
                        <option value={1}>Giá (Cao &gt; Thấp)</option>
                        <option value={2}>Tên (A - Z)</option>
                        <option value={3}>Tên (Z - A)</option>
                    </select>
                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                </div>
            </div>
        );
    }
}

export default TitleProduct;