import React, { Component } from 'react';
import Header from './component/Header/Header';
import Path from './component/Path/Path';
import Footer from './component/Footer/Footer';
import Cart from './component/Cart/Cart';
import DetailProduct from './component/Detail_Product/Detail_Product';
import Home from './component/Home/Home';
import NotFound404 from './component/404/Not_Found_404';
import Product from './component/Product/Product';
import { connect } from 'react-redux';
import *  as Action from './Actions/Actions';
import SignUp from './component/Sign Up/Sign_Up';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLogin: false,
      PositionY : 0 
    }
  }



  Handle_Scroll = () => {


    this.setState({

      PositionY : window.scrollY    

    })  
  }

  

  componentDidMount = () => {

    window.addEventListener('scroll', this.Handle_Scroll);
  
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
    const { ShowLogin , PositionY } = this.state   

    if(PositionY >= 250 ){

      this.props.on_Get_PositionY_Window(true);
    }
    else{

      this.props.on_Get_PositionY_Window(false);
    }

    return (
      <div className="App">
        <Header ShowLogin={ShowLogin} ClickShowLogin={this.OnShowLogin} ClickCloseLogin={this.OffShowLogin} PositionY = {PositionY}></Header>
        <Path></Path>
        <SignUp></SignUp>       
        <Footer ></Footer>
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
      on_Get_PositionY_Window: (PositionY) => {
          dispatch(Action.Get_PositionY_Window(PositionY))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)( App)

