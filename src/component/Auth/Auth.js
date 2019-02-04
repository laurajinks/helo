import React, { Component } from "react";
import axios from "axios";

export default class Auth extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    login = () => {
        const { username, password } = this.state;
        axios.post("/auth/login", { username, password });
    };

    register = () => {
        const { username, password } = this.state;
        axios.post("/auth/register", { username, password });
    };

    render() {
        return (
            <div>
                <p>Username</p>
                <input onChange={this.handleInputChange} />
                <p>Password</p>
                <input onChange={this.handleInputChange} />
                <button onClick={this.login}>Log In</button>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}
