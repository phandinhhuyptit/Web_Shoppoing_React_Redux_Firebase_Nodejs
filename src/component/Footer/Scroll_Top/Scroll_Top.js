import React, { Component } from 'react';
import { connect } from 'react-redux';


class Scroll_Top extends Component {
    render() {
        return (
            <button type="button" className="Button_Scroll_Top">
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
