import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid ">
                <div className="container">
                    <h1 className="display-3 text-center" id = "tittle"><marquee>Trang Quản Lý User</marquee></h1>
                    <p className="lead text-center">Web Bán oto</p>
                    <hr className="my-2" />       
                </div>
            </div>
        );
    }
}

export default Header;
