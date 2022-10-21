const dataQuery = require('../data/statesCitiesData');

exports.getAllStates = function () {
    return dataQuery.getStates();
}

exports.getStateById = async function (id) {
    return await dataQuery.getStateById(id); 
}

exports.getCitiesByIdState = function (id) {
    return dataQuery.getCitiesByIdState(id);
}

exports.getCityById = async function (id) {
    return await dataQuery.getCityById(id); 
}

