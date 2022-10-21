const database = require('../infra/database');

exports.getStates = function () {
    return database.query('select * from brazil.state');
}

exports.getStateById = function (id) {
    return database.oneOrNone('select * from brazil.state where id_state = $1', [id]);
}

exports.getCitiesByIdState = function (id) {
    return database.query('select * from brazil.city where id_state = $1', [id]);
}

exports.getCityById = function (id) {   
    return database.oneOrNone('select * from brazil.city where id_city = $1', [id]);
}

