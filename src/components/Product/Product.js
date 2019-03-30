import React, { Component } from 'react';
import './Product.css';
import SidebarWidget from './Sidebar Widget/SidebarWidget';
import TitleProduct from './Title Product/TitleProduct';
import SlidebarPanel from './Slidebar Panel/Slidebar_Panel';
import Refine from './Refine/Refine';
import { connect } from 'react-redux';
import * as Action from '../../Actions/ProjectActions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ListProducts from './List Products/List_Products';
import GridProducts from './Grid Products/Grid_Products';
import PropTypes from 'prop-types'

const propTypes = {

    onSliderPanel : PropTypes.bool.isRequired,
    onGridOrList : PropTypes.bool.isRequired,
    On_Close_Slidebar_Panel : PropTypes.func.isRequired
}
const defaultProps ={

    On_Close_Slidebar_Panel : () =>{}

}

class Product extends Component {

    Handle_Close_Background_Panel_And_Slider_Panel = () => {

        this.props.On_Close_Slidebar_Panel(false);
    }

    render() {
        let SliderPanel, Background_Panel, List_Product, Grid_Product;
        console.log(localStorage.getItem("Key"));

        if (this.props.onGridOrList) {

            Grid_Product = <GridProducts />;

        }
        else {

            List_Product = <ListProducts />;

        }
        if (this.props.onSliderPanel) {

            SliderPanel = <SlidebarPanel />
            Background_Panel = <div onClick ={this.Handle_Close_Background_Panel_And_Slider_Panel} class="Backgroud_Slidebar_Panel"></div>
        }
        return (
            <div>
                <Refine></Refine>
                <div className="Shop_Wrap">
                    <div className="container">
                        <div className="row">
                            <SidebarWidget />
                            <div className="col-lg-9  col-12">
                                <div className="Items Border-Card2">
                                    <TitleProduct></TitleProduct>

                                    <ReactCSSTransitionGroup
                                        transitionName="Grid_List"
                                        transitionEnterTimeout={500}
                                        transitionLeaveTimeout={300}>

                                        {List_Product}

                                        {Grid_Product}

                                    </ReactCSSTransitionGroup>

                                    <div className="col-12 " id="Pagination_Product">
                                        <nav>
                                            <ul className="pagination ">
                                                <li className="page-item disabled">
                                                    <a className="page-link" href="7567" tabIndex={-1}>Previous</a>
                                                </li>
                                                <li className="page-item"><a className="page-link" href="45">1</a></li>
                                                <li className="page-item"><a className="page-link" href="12">2</a></li>
                                                <li className="page-item"><a className="page-link" href="45">3</a></li>
                                                <li className="page-item">
                                                    <a className="page-link" href="45654">Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ReactCSSTransitionGroup
                        transitionName="SliderPanel"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>



                        {SliderPanel}

                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName="BackgroundPanel"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>

                        {Background_Panel}
                    </ReactCSSTransitionGroup>

                </div>
            </div>
        );
    }
}

Product.propTypes =propTypes;
Product.defaultProps =defaultProps;  

const mapStateToProps = (state, ownProps) => {
    return {
        onSliderPanel: state.project.onSliderPanel,
        onGridOrList: state.project.onGridOrList
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        On_Close_Slidebar_Panel: (Close_Slidebar_Panel) => {
            dispatch(Action.Close_Slidebar_Panel(Close_Slidebar_Panel))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
