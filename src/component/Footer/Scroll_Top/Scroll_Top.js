import React, { Component } from 'react';
import { connect } from 'react-redux';


class Scroll_Top extends Component {
    constructor(props) {
        super(props);
        this.ScrollRef = null
    }


    on_Click_Scroll_Top = () => {

        window.scrollTo(0, 0);


    }

    render() {
        
        return (
            <button onClick={() => this.on_Click_Scroll_Top()} ref={(ref) => this.ScrollRef = ref} type="button" className="Button_Scroll_Top">
                <i className="fas fa-arrow-up" />
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
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scroll_Top)
