const express = require('express');
const router = express.Router();
const service = require('../service/statesCitiesService');

router.get('/states', async function (req,res) {
  
   const states = await service.getAllStates();
   res.status(200).json(states);

});

router.get('/state/:id', async function (req,res) {

    const stateSelected = await service.getStateById(req.params.id);

    if(stateSelected) {
        res.status(200).json(stateSelected);
    } else {
        res.status(404).end();
    }  

});

router.get('/cities/:id', async function (req,res) {

    const cities = await service.getCitiesByIdState(req.params.id);
  
    if(cities) {
        res.status(200).json(cities);
    } else {
        res.status(404).end();
    }  

 });

 router.get('/city/:id', async function (req,res) {

    const city = await service.getCityById(req.params.id);
  
    if(city) {
        res.status(200).json(city);
    } else {
        res.status(404).end();
    }  

 });

module.exports = router;