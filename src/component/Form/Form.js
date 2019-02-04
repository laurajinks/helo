import React, { Component } from "react";
import axios from "axios";
// const url = "http://localhost:3001";

export default class Form extends Component {
    state = {
        title: "",
        img: "",
        content: ""
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { title, img, content } = this.state;
        axios
            .post(`/api/posts`, { title, img, content })
            .then(() => this.props.history.push("/dashboard"));
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Title:</p>
                    <input name="title" onChange={this.handleInputChange} />
                    <p>Image URL:</p>
                    <input name="img" onChange={this.handleInputChange} />
                    <p>Content:</p>
                    <textarea
                        name="content"
                        onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}
