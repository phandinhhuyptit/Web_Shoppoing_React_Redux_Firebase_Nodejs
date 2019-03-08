import React, { Component } from 'react';
import Header from './component/Header/Header';
import Path from './component/Path/Path';
import Footer from './component/Footer/Footer';


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
        <Footer ></Footer>
      </div>
    );
  }
}
export default App;
