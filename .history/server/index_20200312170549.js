const express =  require("express")
const app = express()
const mongoose = require('mongoose');
const db = require('./db/db');
var user = require('./Models/user');

const port = 1234


app.listen(port, () => console.log(`Example app listening on port ${port}!`))