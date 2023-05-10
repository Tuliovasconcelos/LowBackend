import { createConnections } from 'typeorm';

createConnections().then(connections => {

    const mysqlConnection = connections.find(connection => connection.name === 'mysql');
    const oracleConnection = connections.find(connection => connection.name === 'oracle');

}).catch(error => console.log(error));
