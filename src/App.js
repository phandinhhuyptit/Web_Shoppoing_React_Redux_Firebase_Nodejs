import React, { Component } from 'react';
import Header from './component/Header/Header';
import Path from './component/Path/Path';
import Footer from './component/Footer/Footer';
import Cart  from './component/Cart/Cart';
import DetailProduct from './component/Detail_Product/Detail_Product';
import Home from './component/Home/Home';
import NotFound404 from './component/404/Not_Found_404';
import Product from './component/Product/Product';
import Detail_Product from './component/Detail_Product/Detail_Product';






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
        <Home></Home>  
        <Footer ></Footer>
      </div>
    );
  }
}
export default App;
