module.exports = {
    createPost: (req, res) => {
        const {title, content, postPic} = req.body
        const db = req.app.get('db');
        const {id} = req.params

    db.create_post(title, content, postPic, id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },

    getUserPost: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params

    db.get_user_posts(id)
        .then(post => res.status(200).send(post))
        .catch(err => res.status(500).send(err))

    },

    editUsername: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        const {username} = req.body
    
    db.edit_username({id, username})
        .then((user) => res.status(200).send(user))
        .catch(err => res.status(500).send(err))
    },
    

    deletePost: (req, res) => {
        const db = req.app.get('db');
        const {id}= req.params

    db.delete_post(id)
        .then( () => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
    
}