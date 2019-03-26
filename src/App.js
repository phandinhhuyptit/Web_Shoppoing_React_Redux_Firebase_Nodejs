import React, { Component } from 'react';
import Header from './components/Header/Header';
import Path from './components/Path/Path';
import Footer from './components/Footer/Footer';
import { connect } from 'react-redux';
import *  as Action from './Actions/ProjectActions';
import { BrowserRouter as Router } from "react-router-dom";
import DirectionalURL from './Router/DirectionalURL';
import * as actionAuth from './Actions/AuthAction';
import {auth} from './Firebase/config';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLogin: false,
      PositionY: 0
    }
  }
  
  componentWillMount = () => {
    

    auth.onAuthStateChanged( (user) => {
      if (user) {
        this.props.on_First_State_Account(true);
      } else {
        this.props.on_First_State_Account(false);
      }
    });
  }




  
  Handle_Scroll = () => {


    this.setState({

      PositionY: window.scrollY

    })
  }


  componentDidMount = () => {

    window.addEventListener('scroll', this.Handle_Scroll);
  
    this.props.on_Get_Data();
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
      
    var user = auth.currentUser;
    console.log(user);


    const { ShowLogin, PositionY } = this.state;   


   
    if (PositionY >= 250 && this.props.onPositionY === false ) {

      
      this.props.on_Get_PositionY_Window(true);
    }
    else if (PositionY < 250 && this.props.onPositionY === true)
    {

      this.props.on_Get_PositionY_Window(false);

    }


    return (
      <Router>
        <div className="App">
      
          <Header ShowLogin={ShowLogin} ClickShowLogin={this.OnShowLogin} ClickCloseLogin={this.OffShowLogin} PositionY={PositionY}></Header>
          <Path></Path>
          <DirectionalURL/>
          <Footer ></Footer>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    
    onPositionY : state.project.onPositionY

  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    on_Get_PositionY_Window: (PositionY) => {
      dispatch(Action.Get_PositionY_Window(PositionY))
    },
    on_Get_Data :() =>{

      dispatch(Action.Get_Data_Firebase())
    },
    on_State_Account : () =>{

      dispatch(actionAuth.State_Account());

    },
    on_First_State_Account : (state) =>{

      dispatch(actionAuth.First_State_Account(state));

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

