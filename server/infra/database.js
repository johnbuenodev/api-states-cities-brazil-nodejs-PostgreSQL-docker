const pgpromise = require('pg-promise')();

const infradb = pgpromise({
 user: 'postgres',
 password: 'john',
 host: 'postgres-compose', //localhost se não estiver usando o docker
 port: '5432:5432', //5432 se não estiver usando o docker
 database: 'postgres'
});

module.exports = infradb;
