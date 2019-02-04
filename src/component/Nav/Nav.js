import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/dashboard">
                <button>Home</button>
            </Link>
            <Link to="/new">
                <button>New Post</button>
            </Link>
            <Link to="/">
                <button>Log Out</button>
            </Link>
        </div>
    );
};

export default Nav;
