import React, { Component } from 'react';
import './Product.css';
import SidebarWidget from './Sidebar Widget/SidebarWidget';
import TitleProduct from './Title Product/TitleProduct';
import Slidebar_Panel from './Slidebar Panel/Slidebar_Panel';
import Refine from './Refine/Refine';
import { connect } from 'react-redux';
import * as Action from '../../Actions/Actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ListProducts from './List Products/List_Products';
import GridProducts from './Grid Products/Grid_Products';



class Product extends Component {

    Handle_Close_Background_Panel_And_Slider_Panel = () => {

        this.props.On_Close_Slidebar_Panel();
    }

    render() {
        let SliderPanel, Background_Panel,List_Product,Grid_Product;

       
       
        if(this.props.onGridOrList){

            Grid_Product =  <GridProducts/>;

        }
        else {

            List_Product =   <ListProducts/>;

        }
        if (this.props.onSliderPanel) {

            SliderPanel = <Slidebar_Panel />
            Background_Panel = <div class="Backgroud_Slidebar_Panel"></div>
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
const mapStateToProps = (state, ownProps) => {
    return {
        onSliderPanel: state.onSliderPanel,
        onGridOrList : state.onGridOrList
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
