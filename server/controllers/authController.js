const bcrypt = require('bcrypt');

module.exports = {
    register: async(req, res) => {
        const { username, password, email, profilePic } =  req.body,
            db = req.app.get('db');

        const foundUser = await db.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Seat Taken')
        }
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
            //  console.log(req.body)
        const newUser = await db.register_user
             ({ username, email, password: hash, profilePic});
                req.session.helo_user = newUser[0];
                res.status(201).send(req.session.helo_user);
               

    },
   
    login: async (req,res) => {
        const {email, password} = req.body,
            db = req.app.get('db');

        let foundUser = await db.check_user({email});
        if(!foundUser[0]){
            return res.status(400).send('Email not found');
        }
        const authenitcated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenitcated){
            return res.status(401).send('Password not Congreunt')
        }
        delete foundUser[0].password;
        req.session.helo_user = foundUser[0];
        res.status(202).send(req.session.helo_user);

    },

    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    }


};