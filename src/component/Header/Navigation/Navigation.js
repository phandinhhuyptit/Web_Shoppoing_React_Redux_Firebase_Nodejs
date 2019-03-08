import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../Actions/Actions'

import './Navigation.css';
class Navigation extends Component {
    
    Off_Nav = () =>{

        this.props.Off_Nav(false);
    }

    render() {      

        return (
            <div id="Navbar_Toggle">            
                <div onClick = {()=>this.Off_Nav()}  className="Cancel">
                    <i className="fas fa-times" />
                </div>
                <ul>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="#">Action</a>
                                <a className="dropdown-item dropdown-text" href="#">Another action</a>
                                <a className="dropdown-item dropdown-text" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="#">Action</a>
                                <a className="dropdown-item dropdown-text" href="#">Another action</a>
                                <a className="dropdown-item dropdown-text" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="#">Action</a>
                                <a className="dropdown-item dropdown-text" href="#">Another action</a>
                                <a className="dropdown-item dropdown-text" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="#">Action</a>
                                <a className="dropdown-item dropdown-text" href="#">Another action</a>
                                <a className="dropdown-item dropdown-text" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="#">Action</a>
                                <a className="dropdown-item dropdown-text" href="#">Another action</a>
                                <a className="dropdown-item dropdown-text" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="#">Action</a>
                                <a className="dropdown-item dropdown-text" href="#">Another action</a>
                                <a className="dropdown-item dropdown-text" href="#">Something else here</a>
                            </div>
                        </div>
                    </li>
                </ul>
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
        Off_Nav: (OffNav) => {
            dispatch(Action.Off_Nav(OffNav))    
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
