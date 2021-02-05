import React, { Component } from 'react'

export default class Header extends Component{
    render(){
        return(
            <div className="header">
                <ul className="nav">
                    <li>
                        <a href="#">Packages</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Book</a>
                    </li>
                </ul>
                <div className="title">
                <h2>
                    Picnic Service
                </h2>
                </div>
            </div>
        )
    }
}