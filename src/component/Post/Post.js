import React from "react";

const Post = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.img} alt="default" />
            <h3>{props.username}</h3>
            <p>{props.content}</p>
        </div>
    );
};

export default Post;
