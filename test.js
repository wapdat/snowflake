#!/usr/local/bin/node

console.log("Starting to connect to nowflake with Username & Password")

var snowflake = require('snowflake-sdk');

let user = 'lindsay'; // Your username that you login to the Sowflake web UI
let password = "XXXXXXXXXXXXXXXXXXXXXX";
let application = '';
// get this "account' value as the first part of your Dedicated Login URL you get on your invite email
// https://ruubhom-ua60212.snowflakecomputing.com
let account = 'ruubhom-ua60212';

var connection = snowflake.createConnection({
    account: account,
    username: user,
    password: password,
    application: application
  });

  console.log("Created connection: " + JSON.stringify(connection, null, 4));

  console.log("Now trying to connect.");

  connection.connect( 
    function(err, conn) {
        if (err) {
            console.log('Unable to connect: ' + err.message);
            } 
        else {
            console.log('Successfully connected to Snowflake.');
            // Optional: store the connection ID.
            let connection_ID = conn.getId();

            console.log("Got connection_ID: " + connection_ID);
            }
    }
);

// Here is a simple SQL query - there are an infinite possibilities now

connection.execute({
    sqlText: 'SELECT * FROM test1.schema1.table1;',
    complete: function(err, stmt, rows) {
      if (err) {
        console.error('Failed to execute statement due to the following error: ' + err.message);
      } else {
        console.log('Successfully executed statement: ' + stmt.getSqlText());

        console.log("Row count: " + rows.length);
        console.log(JSON.stringify(rows, null, 4));
      }
    }
  });

  connection.destroy(function(err, conn) {
    if (err) {
      console.error('Unable to disconnect: ' + err.message);
    } else {
      console.log('Disconnected connection with id: ' + connection.getId());
    }
  });

