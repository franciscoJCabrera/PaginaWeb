const express = require('express');
const {PrismaClient} = require('../BaseDatos/generated/prisma');

// Creamos las instancias de Express y Prisma
const app = express();  // Creamos el servidor Express
const prisma = new PrismaClient();

// Hacemos que Express use JSON para las peticiones
app.use(express.json());

/**
 * Ruta que devuelve todos los usuarios con sus pedidos asociados
 * GET /api/users
 */
app.get('/api/users', async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            pedidos: true
        }
    });
    res.json(users);    // Damos la respuesta en formato JSON
});

/**
 * Ruta que crea un nuevo usuario
 * POST /api/users
 */
app.post('/api/users', async (req, res) => {
    const {name, email, password} = req.body;   // Obtenemos los datos de la petición
    const newUser = await prisma.user.create({  // Creamos un nuevo usuario con los datos leidos y lo insertamos en la BD
        data: {
            name,
            email,
            password
        }
    });
    res.status(201).json(newUser);
});

/**
 * Devolvemos todos los pedidos con informacion del autor
 * GET /api/pedidos
 */
app.get('/api/pedidos', async (req, res) => {
    const pedidos = await prisma.pedido.findMany({
        include: {
            autor: true
        }
    });
    res.json(pedidos);
});


/**
 * Crea un nuevo pedido asociado a un usuario
 * POST /api/pedidos
 */
app.post('/api/pedidos', async (req, res) => {
    const {nombre, email, autorId} = req.body;   // Obtenemos los datos de la petición
    const newPedido = await prisma.pedido.create({  // Creamos un nuevo pedido con los datos leidos y lo insertamos en la BD
        data: {
            nombre,
            email,
            autorId
        }
    });
    res.status(201).json(newPedido);
});



// Se inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor Express en http://localhost:3000');
});