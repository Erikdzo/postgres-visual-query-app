const Router = require('express-promise-router');
const router = new Router();
const utils = require('../utils');

module.exports = router;


router.post('/query', (req, res) => {

    const db = utils.connectToDatabase(req, res);

    const query = {
        text: req.body.sql
    };
    // db.query('SELECT $1::text FROM isik', ["eesnimi"]).then( queryRes => {
    //     console.log(queryRes);
    // }).catch( err => {
    //     console.log(err);
    // });
    db.query(query)
        .then(queryRes => {
                res.json(queryRes);
            })
        .catch(err => {
            const errorMsg = {
                message: err.message,
                code: err.code,
                position: err.position
            };
            res.status(400).json(errorMsg);

        })
        .then(() => db.end())

});