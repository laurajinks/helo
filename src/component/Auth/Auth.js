import React, { Component } from "react";
import axios from "axios";
// const url = "http://localhost:3001";

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
        axios.post(`/auth/login`, { username, password }).then(response => {
            // console.log(response);
            this.props.history.push("/dashboard");
        });
    };

    register = () => {
        const { username, password } = this.state;
        axios.post(`/auth/register`, { username, password }).then(response => {
            // console.log(response);
            this.props.history.push("/dashboard");
        });
    };

    render() {
        return (
            <div>
                <p>Username</p>
                <input name="username" onChange={this.handleInputChange} />
                <p>Password</p>
                <input name="password" onChange={this.handleInputChange} />
                <button onClick={this.login}>Log In</button>
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}
