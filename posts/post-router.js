const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();



// router.get('/', (req, res) => {
//     db.select('id', 'title', 'contents').from('posts')
//     // db('posts')
//     .then(posts => {res.status(200).json(posts)})
//     .catch(error => {
//         res.status.apply(500).json({message: 'nothing'})
//     })
// });

router.get('/', (req, res) => {
    // db.select('*')
    //     .from('posts')
    db('posts')
        .select('id', 'title', 'contents')
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.json(error)
        })

});



// router.get('/:id', (req, res) => {
//     db('posts')
//     .where({id: req.params.id})
//     .first()
//     .then(post => {res.status(200).json(post)})
//     .catch(error => {
//         res.status.apply(500).json({message: 'nothing'})
//     })
// });

router.get('/:id', (req, res) => {

    const {id} = req.params

    db('posts')
        .where({id})
        .first()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            res.json(err)
        })

    
});



// router.post('/', (req, res) => {
//     const post = req.body;
//     db('posts').insert(post, 'id')
//     .then(postID => {res.status(200).json(postID)})
//     .catch(error => {
//         res.status.apply(500).json({message: 'nothing'})
//     })
// });

router.post('/', (req, res) => {

    const postData = req.body

    db('posts')
        .insert(postData, 'id')
        .then( ( [id] ) => {
            db('posts')
                .where({id})
                .first()
                .then(post => {
                    res.status(200).json(post)
                })
            res.status(200).json(id)
        })
        .catch(err => {
            res.json(err)
        })
});



// router.put('/:id', (req, res) => {
//     const changes = req.body
//     db('posts')
//     .where('id', '=', req.params.id)
//     .update(changes)
//     .then(postID => {
//         if(count > 0){
//             res.status(200).json(postID)
//         } else {
//             res.status(400).json({message: 'nothing found'})
//         }
//     })
//     .catch(error => {
//         res.status.apply(500).json({message: 'nothing'})
//     })
// });

router.put('/:id', (req, res) => {

});







// router.delete('/:id', (req, res) => {
//     db('posts')
//     .where('id', '=', req.params.id)
//     .del()
//     .then(postID => {
//         if(count > 0){
//             res.status(200).json(postID)
//         } else {
//             res.status(400).json({message: 'nothing found'})
//         }
//     })
//     .catch(error => {
//         res.status.apply(500).json({message: 'nothing'})
//     })
// });

router.delete('/:id', (req, res) => {

});




module.exports = router;