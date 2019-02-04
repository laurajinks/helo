import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";

export default class Dashboard extends Component {
    state = {
        search: "",
        refresh: false,
        posts: []
    };

    componentDidMount = () => {
        axios.get("api/posts").then(response => {
            this.setState({ posts: response.data });
        });
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    reset = () => {
        this.setState({ search: "" });
    };

    search = e => {
        e.preventDefault();
        const { search } = this.state;
        axios.get(`/api/posts/search?search=${search}`).then(response => {
            console.log(response.data);
            this.setState({ posts: response.data });
        });
    };

    render() {
        const posts = this.state.posts.map(post => {
            return (
                <Post
                    title={post.title}
                    content={post.content}
                    id={post.id}
                    user_id={post.user_id}
                    username={post.username}
                    img={post.img}
                />
            );
        });
        return (
            <div>
                <p>Search</p>
                <input
                    name="search"
                    defaultValue={this.state.search}
                    onChange={this.handleInputChange}
                    onSubmit={this.search}
                />
                <button onClick={this.search}>Search</button>
                <button onClick={this.reset}>Reset</button>
                <input type="checkbox" />
                <span>My Posts</span>
                {posts}
            </div>
        );
    }
}
