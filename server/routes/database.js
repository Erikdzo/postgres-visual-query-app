

const Router = require('express-promise-router');
const router = new Router();
const utils = require('../utils');
const queries = require("../queries").querys;
module.exports = router;

router.post('/tables', (req, res) => {

    const db = utils.connectToDatabase(req, res);

    db.query(queries.postgre.tables, (err, queryRes) => {


        res.json(queryRes);
        db.end()
    })
});

router.post('/constraints', (req, res) => {
    const db = utils.connectToDatabase(req, res);

    db.query(queries.postgre.constraints, (err, queryRes) => {
        res.json(queryRes);
        db.end()
    })
});

router.post('/columns', (req, res) => {
    const db = utils.connectToDatabase(req, res);

    db.query(queries.postgre.columns, (err, queryRes) => {
        res.json(queryRes);
        db.end()
    })
});