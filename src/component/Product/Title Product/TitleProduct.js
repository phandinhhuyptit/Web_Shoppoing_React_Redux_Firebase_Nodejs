import React, { Component } from 'react';
import './Title_Product.css';


class TitleProduct extends Component {
    render() {
        return (
            <div className="col-12 Header_Items">
                <h4 className="Title_Items">Tên Sảm Phẩm</h4>
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