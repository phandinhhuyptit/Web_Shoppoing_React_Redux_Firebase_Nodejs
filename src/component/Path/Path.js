import React, { Component } from 'react';
import { connect } from 'react-redux'


class Path extends Component {
    render() {
        return (
            <div className="Path">
                <div className="container">
                    <div className="row Row_Path">
                        <div className="col-12">
                            <nav aria-label="breadcrumb  ">
                                <ol className="breadcrumb edit_breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Path)
