import React, { Component } from 'react';
import Header from './component/Header/Header';
import Path from './component/Path/Path';
import Footer from './component/Footer/Footer';
import Carousel from './component/Home/Carousel/Carousel';
import Blog from './component/Home/Blog/Blog';
import Product from './component/Home/Product/Product';
import Multiple_Slider from './component/Home/Multiple_Slider/Multiple_Slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLogin: false

    }
  }


  OnShowLogin = () => {


    this.setState({

      ShowLogin: true

    })

  }
  OffShowLogin = () => {


    this.setState({

      ShowLogin: false

    })

  }
  

  render() {
    const { ShowLogin } = this.state
    return (
      <div className="App">
        <Header ShowLogin={ShowLogin} ClickShowLogin={this.OnShowLogin} ClickCloseLogin={this.OffShowLogin}></Header>       
        <Path></Path>
        <Carousel></Carousel>
        <Product></Product>        
        <Blog></Blog>
        <Multiple_Slider></Multiple_Slider>
        <Footer ></Footer>
      </div>
    );
  }
}
export default App;
