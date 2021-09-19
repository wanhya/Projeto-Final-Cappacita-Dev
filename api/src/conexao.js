const knex = require('knex')
const databaseconfig = require('./knex')
const databaseconnection = knex(databaseconfig)


module.exports = {databaseconnection}