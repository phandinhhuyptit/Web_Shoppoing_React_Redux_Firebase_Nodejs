import React, { Component } from 'react';
import Header from './components/Header/Header';
import Path from './components/Path/Path';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import DetailProduct from './components/Detail_Product/Detail_Product';
import Home from './components/Home/Home';
import NotFound404 from './components/404/Not_Found_404';
import Product from './components/Product/Product';
import { connect } from 'react-redux';
import *  as Action from './Actions/Actions';
import SignUp from './components/Sign Up/Sign_Up';
import Login from './components/Login/Login';
import { BrowserRouter as Router } from "react-router-dom";
import DirectionalURL from './Router/DirectionalURL';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLogin: false,
      PositionY: 0
    }
  }



  Handle_Scroll = () => {


    this.setState({

      PositionY: window.scrollY

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
    const { ShowLogin, PositionY } = this.state

    if (PositionY >= 250) {

      this.props.on_Get_PositionY_Window(true);
    }
    else {

      this.props.on_Get_PositionY_Window(false);
    }

    return (
      <Router>
        <div className="App">
          <Header ShowLogin={ShowLogin} ClickShowLogin={this.OnShowLogin} ClickCloseLogin={this.OffShowLogin} PositionY={PositionY}></Header>
          <Path></Path>
          <DirectionalURL />
          <Footer ></Footer>
        </div>
      </Router>
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
export default connect(mapStateToProps, mapDispatchToProps)(App)

