import React, { Component } from 'react';
import { connect } from 'react-redux';
import { animateScroll as scroll } from 'react-scroll';
import * as Action from '../../../Actions/Actions'



class Scroll_Top extends Component {
    constructor(props) {
        super(props);       
        
        
    }    

    on_Click_Scroll_Top = () => {

        scroll.scrollToTop();

    }

    
 
    render() {
        
        

        
         
     
        return (
            <button onClick={() => this.on_Click_Scroll_Top()} ref={(ref) => this.ScrollRef = ref} type="button" className="Button_Scroll_Top">
                <i  className="fas fa-arrow-up" />
            </button>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Scroll_Top)