const bcrypt = require("bcyrptjs");

module.exports = {
    register: (req, res) => {
        const { username, password } = req.body;
        const hash = await bcrypt.hash(password, 12);
        req.app
            .get("db")
            .auth.register(username, hash)
            .then(response => {
                const user = response[0];
                req.session.user = {
                    id: user.user_id,
                    username: user.username
                };
                res.status(201).json(req.session.user);
            })
            .catch(err => console.log(err));
    },

    login: (req, res) => {
        const { username, password } = req.body;
    }
};
