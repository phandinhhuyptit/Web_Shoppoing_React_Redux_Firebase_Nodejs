import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as Action from '../../../Actions/Actions'

class Slidebar_Panel extends Component {

    state = {

        PositionOfSidebarPanel : ''


    }


    Handle_Close_Slidebar_Panel = () =>{

       this.props.On_Close_Slidebar_Panel(false);

    }
    Handle_Get_Value_Slidebar_Panel =(e) =>{

       const Position = e.currentTarget.getAttribute('data')
        this.setState({

            PositionOfSidebarPanel : Position


        })
    }

    render() {
        return (
            <div className="Slidebar_Panel">
            
                <div onClick = {this.Handle_Close_Slidebar_Panel}  className="Button-Close-Slide ">
                    <i className="fas fa-times" />
                </div>
                <div className="SlideBars_Panel_Info">
                    <div onClick={this.Handle_Get_Value_Slidebar_Panel} data={0} className="content-SlidebarPanel">
                        <span>
                        
                            <i className={`${this.state.PositionOfSidebarPanel ==='0' ?'fas fa-chevron-down down' :'fas fa-chevron-right right'}`}/>
                           
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className={`List-SlidebarPanel ${this.state.PositionOfSidebarPanel ==='0' ? '' : 'd-none'} `}>
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel"  onClick={this.Handle_Get_Value_Slidebar_Panel} data={1}>
                        <span>
                        <i className={`${this.state.PositionOfSidebarPanel ==='1' ?'fas fa-chevron-down down' :'fas fa-chevron-right right'}`}/>
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div className={`List-SlidebarPanel ${this.state.PositionOfSidebarPanel ==='1' ? '' : 'd-none'} `}>
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel"  onClick={this.Handle_Get_Value_Slidebar_Panel} data={2}>
                        <span>
                        <i className={`${this.state.PositionOfSidebarPanel ==='2' ?'fas fa-chevron-down down' :'fas fa-chevron-right right'}`}/>
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div  className={`List-SlidebarPanel ${this.state.PositionOfSidebarPanel ==='2' ? '' : 'd-none'} `}>
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel"  onClick={this.Handle_Get_Value_Slidebar_Panel} data={3}>
                        <span>
                        <i className={`${this.state.PositionOfSidebarPanel ==='3' ?'fas fa-chevron-down down' :'fas fa-chevron-right right'}`}/>
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div  className={`List-SlidebarPanel ${this.state.PositionOfSidebarPanel ==='3' ? '' : 'd-none'} `}>
                        <ul className="List">
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                            <li>120MM (6)</li>
                        </ul>
                    </div>
                </div>
                <div className="SlideBars_Panel_Info">
                    <div className="content-SlidebarPanel" onClick={this.Handle_Get_Value_Slidebar_Panel} data={4}>
                        <span>
                        <i className={`${this.state.PositionOfSidebarPanel ==='4' ?'fas fa-chevron-down down' :'fas fa-chevron-right right'}`}/>
                        </span>
                        RADIATOR SIZE
                    </div>
                    <div  className={`List-SlidebarPanel ${this.state.PositionOfSidebarPanel ==='4' ? '' : 'd-none'} `}>
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
