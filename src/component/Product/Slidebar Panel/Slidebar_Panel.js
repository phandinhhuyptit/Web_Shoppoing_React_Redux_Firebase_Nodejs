import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from '../../../Actions/Actions'

class Slidebar_Panel extends Component {

    Handle_Close_Slidebar_Panel = () =>{

        console.log("OK");

    }

    render() {
        return (
            <div className="Slidebar_Panel">
                <div className="Button-Close-Slide ">
                    <i className="fas fa-times" />
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel">
                        <span>
                            <i className="fas fa-chevron-right right" />
                            <i className="fas fa-chevron-down down" />
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className="List-SlidebarPanel">
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel">
                        <span>
                            <i className="fas fa-chevron-right right" />
                            <i className="fas fa-chevron-down down" />
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className="List-SlidebarPanel">
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel">
                        <span>
                            <i className="fas fa-chevron-right right" />
                            <i className="fas fa-chevron-down down" />
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className="List-SlidebarPanel">
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel">
                        <span>
                            <i className="fas fa-chevron-right right" />
                            <i className="fas fa-chevron-down down" />
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className="List-SlidebarPanel">
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel">
                        <span>
                            <i className="fas fa-chevron-right right" />
                            <i className="fas fa-chevron-down down" />
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className="List-SlidebarPanel">
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
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
        On_Close_Slidebar_Panel: (Close_Slidebar_Panel) => {
            dispatch(Action.Close_Slidebar_Panel(Close_Slidebar_Panel))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slidebar_Panel)
