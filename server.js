const express = require('express');

const recipeRouter = require('./recipes/recipes-router')
const db = require('./data/db-config.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter)

module.exports = server;