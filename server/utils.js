const {Client} = require('pg');

exports.connectToDatabase = function (req, res) {
    const db = new Client({
        user: req.body.user,
        host: req.body.host,
        database: req.body.database,
        password: req.body.password,
        port: req.body.port
    });


    db.connect().catch((err) => {
        if (err) {
            if (err.code === 'ENOTFOUND') {
                res.status(502).json({message: "Error: Host not found (code: ENOTFOUND)"})
            } else if (err.code === 'ETIMEDOUT') {
                res.status(504).json({message: "Error: Connection timed out (code: ETIMEDOUT)"})
            } else {
                res.status(500).json({message: "Error: Something went wrong (code: UNEXPECTED)"})
            }
        }
    });
    return db
};
