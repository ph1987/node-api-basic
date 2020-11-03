import express from 'express';

const app = express();

app.use(express.json());

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Dados para criação ou atualização de um registro   
//      ex: { name: 'João', age: 28 }   | request.body

// Route Params: Identificar qual recurso eu quero atualizar ou deletar     
//      ex: /users/:id                  | request.params

// Query Params: Paginação                                                  
//      ex: users?page=2&sort=name      | request.query

app.get('/', (request, response) => {

    return response.json({ message: 'Hello World' });

 });

app.listen(3333);