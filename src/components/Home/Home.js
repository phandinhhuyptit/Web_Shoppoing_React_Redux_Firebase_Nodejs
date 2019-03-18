import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import MutipleSlider from './Multiple_Slider/MultipleSlider';
import Product from './Product/Product';
import { connect } from 'react-redux';
import Blog from './Blog/Blog';

class Home extends Component {
    render() {
      console.log(this.props.match);
      console.log(this.props.location);  
        return (
            <div>
                <Carousel></Carousel>
                <Product></Product>
                <Blog></Blog>
                <MutipleSlider></MutipleSlider>
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
        dispatch1: () => {
            dispatch()
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
