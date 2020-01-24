const express = require('express');

const db = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    db.getRecipes()
    .then(recipe => {
        res.json(recipe)
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: 'Failed to get recipes'})
    })
})

router.get('/:id/shoppinglist', (req, res) => {
   const {id} = req.params

    db.getShoppingList(req.params.id)
    .then(list => {
        if (list.length) {
            res.json(list);
        } else {
            res.status(404).json({message: 'Could not get list for recipe with that id'})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: 'Failed to get shopping list'})
    })
})

module.exports = router;