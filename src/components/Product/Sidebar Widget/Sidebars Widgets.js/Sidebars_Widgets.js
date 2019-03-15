import React, { Component } from 'react';
import './Sidebars_Widgets.css';

class SidebarsWidgets extends Component {
    render() {
        return (
            <div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        LIGHTING
                    </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="20">RGB (53)</a>
                            </li>
                            <li>
                                <a href="21">RED (26)</a>
                            </li>
                            <li>
                                <a href="22">BLUE (7)</a>
                            </li>
                            <li>
                                <a href="23">ICE BLUE(1)</a>
                            </li>
                            <li>
                                <a href="24">RED LED (1)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        SWITCH TYPE
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="25">CHERRY® MX RED (34)</a>
                            </li>
                            <li>
                                <a href="26">CHERRY® MX SPEED (21)</a>
                            </li>
                            <li>
                                <a href="27">CHERRY® MX BROWN (12)</a>
                            </li>
                            <li>
                                <a href="2">CHERRY® MX BLUE (10)</a>
                            </li>
                            <li>
                                <a href="3">CHERRY® MX SILENT (8)</a>
                            </li>
                            <li>
                                <a href="4">RUBBER DOME (7)</a>
                            </li>
                            <li>
                                <a href="5">CHERRY® MX SILENT (3)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        WIRED CONNECTIVITY
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="6">WIRED (82)</a>
                            </li>
                            <li>
                                <a href="7">WIRELESS (6)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        MODEL
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="45">FPS (41)</a>
                            </li>
                            <li>
                                <a href="67">K65 (9)</a>
                            </li>
                            <li>
                                <a href="10">K68 (4)</a>
                            </li>
                            <li>
                                <a href="12">K70 (6)</a>
                            </li>
                            <li>
                                <a href="13">MOBA (41)</a>
                            </li>
                            <li>
                                <a href="14">STRAFE (1)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        ON-BOARD PROFILES
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="15">3 (3)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        USB PASS-THROUGH
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="16">USB 2.0 TYPE-A (55)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        KEY ROLLOVER
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="17">8-KEY (8KRO) (7)</a>
                            </li>
                            <li>
                                <a href="18">FULL KEY (NKRO) (75)</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-widget ">
                    <div className="widget-Headding">
                        PRICE
                                </div>
                    <div className="widget-Name">
                        <ul className="List-Text">
                            <li>
                                <a href="19">0 ₫ - 10.000.000 ₫ (46)</a>
                            </li>
                            <li>
                                <a href="192">10.000.000 ₫ - 20.000.000 ₫ (5)</a>
                            </li>
                        </ul>
                    </div>
                    <div className="Slide-Wrap">
                        <div className="Slider-Title">Hoặc chọn giá khác</div>
                        <div className="Range_Slider slidecontainer">
                            <input type="range" min={1} max={100} defaultValue={50} className="slider" id="myRange" />
                        </div>
                        <div className="Slide-Price">
                            <input defaultValue={1090000} className="slide-input" />
                            <span>-</span>
                            <input defaultValue={169900} className="slide-input" />
                        </div>
                        <button type="button" className="btn btn-primary d-block button-price">OK</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarsWidgets;