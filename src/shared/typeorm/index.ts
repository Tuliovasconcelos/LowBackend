import { createConnection } from 'typeorm';

createConnection()
  .then(connection => {
    // Aqui você pode usar a conexão MySQL conforme necessário
    console.log('Database Postgres started on port 5432! 👌');
  })
  .catch(error => console.log('Erro ao estabelecer a conexão:', error));
