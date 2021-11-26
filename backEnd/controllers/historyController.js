const fetcher = require('../database/mysql_connector');




const getAllHistory = (req, res) => {
    let query = 'SELECT * from siglas_history ORDER BY idsiglas_history DESC'
    
    fetcher.connection.query(query, (error, response) => {
        if (error) {
            res.json([]);
        }
        if (response.length > 0) {
            res.json(response);
        } else {
            res.json(response);
        }
    })
}

const postHistory = (req, res) => {
    let query = 'INSERT INTO siglas_history SET ?'
    
    let history = {
        criteria: req.body.criteria
    }
    fetcher.connection.query(query, history, (error, response) => {
        if (error) {
            res.json({
                error: 'Ha ocurrido un error'
            });
        } else getAllHistory(req, res);
    })
}


module.exports = {
    getAllHistory: getAllHistory,
    postHistory: postHistory,
}