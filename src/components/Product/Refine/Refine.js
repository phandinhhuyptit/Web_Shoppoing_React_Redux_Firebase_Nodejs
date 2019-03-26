import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../Actions/ProjectActions'


class Refine extends Component {


    Handle_Show_Slider_Panel = () =>{   

        this.props.on_Show_Slidebar_Panel(true);

    }
    render() {
        return (
            <div className="Refine d-lg-none ">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button onClick = {this.Handle_Show_Slider_Panel} className="btn Button_Refine">REFINE</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        on_Show_Slidebar_Panel: (Show_Slidebar_Panel) => {
            dispatch(Action.Show_Slidebar_Panel(Show_Slidebar_Panel))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Refine)

