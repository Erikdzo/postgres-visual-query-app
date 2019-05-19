const query = require('./query');
const database = require('./database');

module.exports = (app) => {
    app.use('/postgres-query/api/query', query);
    app.use('/postgres-query/api/database', database)
};