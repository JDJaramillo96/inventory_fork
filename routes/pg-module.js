var pg = require ('pg');

//Properties
var config = {
  user: 'postgres',
  database: 'Inventory',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  max: 10, //Max items on the pool
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool (config);

//Execute function
function execute (query, onCompleted) {
  pool.connect (function (error, client) {
    if (error) console.error(error);

    client.query (function (error,result) {
      if (error) console.error(error);

      onCompleted(result.rows);
      });
    });
  };

  pool.on ('error', function (error, client) {
    if (error) console.error(error);
  });

//Exporting module
module.exports.execute = execute;
