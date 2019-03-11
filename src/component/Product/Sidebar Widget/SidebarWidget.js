import React, { Component } from 'react';
import './Sidebar_Widget.css'
import SidebarsWidgets from './Sidebars Widgets.js/Sidebars_Widgets';

class SidebarWidget extends Component {
    render() {
        return (
            <div className="col-lg-3 d-none d-lg-block">
                <SidebarsWidgets></SidebarsWidgets>             
            </div>
        );
    }
}

export default SidebarWidget;