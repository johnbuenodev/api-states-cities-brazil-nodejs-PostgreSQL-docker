const express = require('express');
const app = express();
var port = process.env.PORT || 3000;

app.use(express.json());

app.use('', require('./server/route/statesCitiesRoute'));

app.listen(port, () => {
    console.log(`Rodando aplicação na porta: ${port}`);
});