import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// const url = "http://localhost:3001";

export default class Nav extends Component {
    logout = () => {
        axios.post(`/auth/logout`).then(response => {
            this.props.location.pathname("/");
        });
    };
    render() {
        return (
            <div>
                <Link to="/dashboard">
                    <button>Home</button>
                </Link>
                <Link to="/new">
                    <button>New Post</button>
                </Link>
                <Link to="/">
                    <button onClick={this.logout}>Log Out</button>
                </Link>
            </div>
        );
    }
}
