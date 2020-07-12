const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req, res) => {
        const { username, email, password, profilePic } =  req.body,
            db = req.app.get('db');

        const foundUser = await db.helo_user.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Seat Taken')
        }
        let salt = bcrypt.genSaltSync9();
        let hash = bcrypt.hashSync(password, salt);

        const newUser = await db.helo_user.register_helo_user
             ({ username, email, password: hash, profilePic});
                req.session.helo_user = newUser[0];
                res.status(201).send(req.session.helo_user);
    }

};