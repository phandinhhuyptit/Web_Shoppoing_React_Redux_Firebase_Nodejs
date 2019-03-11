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
                            <a className=" dropdown-toggle link-dropdown" href="13" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="15">Action</a>
                                <a className="dropdown-item dropdown-text" href="23">Another action</a>
                                <a className="dropdown-item dropdown-text" href="1">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="12" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="123">Action</a>
                                <a className="dropdown-item dropdown-text" href="1234">Another action</a>
                                <a className="dropdown-item dropdown-text" href="12345">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="123456" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="1234567">Action</a>
                                <a className="dropdown-item dropdown-text" href="12345678">Another action</a>
                                <a className="dropdown-item dropdown-text" href="123456789">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="12345678910" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="1234567891011">Action</a>
                                <a className="dropdown-item dropdown-text" href="12345678912">Another action</a>
                                <a className="dropdown-item dropdown-text" href="12345678913">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="123456789134" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="123456789135">Action</a>
                                <a className="dropdown-item dropdown-text" href="123456789136">Another action</a>
                                <a className="dropdown-item dropdown-text" href="123456789137">Something else here</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown show Nav-Bar">
                            <a className=" dropdown-toggle link-dropdown" href="123456789138" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
          </a>
                            <div className="dropdown-menu Dropdown_Menu" aria-labelledby="dropdownMenuLink">
                                <a className="dropdown-item dropdown-text" href="123456789139">Action</a>
                                <a className="dropdown-item dropdown-text" href="123456789140">Another action</a>
                                <a className="dropdown-item dropdown-text" href="123456789141">Something else here</a>
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
