require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
const {
    register,
    login,
    logout,
    createPost,
    getPosts,
    searchPosts
} = require("./controller");
const port = 3001;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
        console.log("Database Connected");
    })
    .catch(err => console.log(err));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7
        }
    })
);

app.post("/auth/register", register);
app.post("/auth/login", login);
app.post("/auth/logout", logout);
app.post("/api/posts", createPost);
app.get("/api/posts", getPosts);
app.get("/api/posts/search", searchPosts);

app.listen(port, () => console.log(`Listening on ${port}`));
