const mysql = require('mysql');

module.exports = function (sql, params, queryCallback) {
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
    });

    db.connect(function (err) {
        if (err) throw err;

        db.query(sql, params, queryCallback);
        db.end();
    });
}
