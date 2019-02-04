const bcrypt = require("bcryptjs");

module.exports = {
    register: async (req, res) => {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 12);
        req.app
            .get("db")
            .register(username, hash)
            .then(response => {
                const user = response[0];
                req.session.user = {
                    id: user.id,
                    username: user.username
                };
                res.status(201).json(req.session.user);
            })
            .catch(err => console.log(err));
    },

    login: (req, res) => {
        const { username, password } = req.body;
        req.app
            .get("db")
            .login(username)
            .then(response => {
                const foundUser = response;
                const user = foundUser[0];
                if (!user) {
                    res.status(401).json({
                        error: "Incorrect username"
                    });
                } else {
                    bcrypt.compare(password, user.hash).then(response => {
                        const isAuthenticated = response;

                        if (!isAuthenticated) {
                            res.status(403).json({
                                error: "Incorrect password"
                            });
                        } else {
                            req.session.user = {
                                id: user.id,
                                username: user.username
                            };
                            console.log(req.session);
                            res.status(200).json(req.session.user);
                        }
                    });
                }
            });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.status(200);
    },

    createPost: (req, res) => {
        const { title, img, content } = req.body;
        console.log(req.body);
        // console.log(req.session);
        // console.log(req.session.user);
        console.log(req.session.user.id);
        req.app
            .get("db")
            .create_post(title, img, content, req.session.user.id)
            .then(response => res.status(200).json(response))

            .catch(err => console.log(err));
    },

    getPosts: (req, res) => {
        req.app
            .get("db")
            .get_posts(req.session.user.id)
            .then(response => res.status(200).json(response))

            .catch(err => console.log(err));
    },

    searchPosts: (req, res) => {
        console.log(req.query);
        const search = `%${req.query.search}%`;
        req.app
            .get("db")
            .search_posts(search)
            .then(response => res.status(200).json(response))

            .catch(err => console.log(err));
    }
};
