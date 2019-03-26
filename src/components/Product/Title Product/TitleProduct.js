import React, { Component } from 'react';
import './Title_Product.css';
import { connect } from 'react-redux'
import * as Action from '../../../Actions/ProjectActions';


class TitleProduct extends Component {
    Handle_List_And_Grid = (e) =>{
        e.preventDefault();
      const Check_Grid_Or_List = e.currentTarget.getAttribute('data-grid');     
        if(Check_Grid_Or_List==="Grid"){          
            this.props.On_Change_List_Or_Grid(true);


        }
        else {

            this.props.On_Change_List_Or_Grid(false);

        }

    }
    render() {     
      
        // Active_List_Or_Grid
        return (
            <div className="col-12 Header_Items">
                <div className="View_Icon">
                    <a onClick={(e)=>this.Handle_List_And_Grid(e)} className={`Grid_View_Icon ${this.props.onGridOrList ? 'Active_List_Or_Grid' : ''}`} data-grid="Grid">

                        <i class="fas fa-th"></i>

                    </a>
                    <a onClick={(e)=>this.Handle_List_And_Grid(e)} className={`List_View_Icon ${!this.props.onGridOrList ? 'Active_List_Or_Grid' : ''}`} data-grid="List">

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
const mapStateToProps = (state, ownProps) => {
    return {
        onGridOrList : state.project.onGridOrList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Change_List_Or_Grid: (List_Or_Grid) => {
            dispatch(Action.Change_List_Or_Grid(List_Or_Grid))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TitleProduct);

