// Script de backend en Node.js empleando Prisma Client para trabajar con la base de datos en memoria

// Definimos la conexión a la base de datos
const {PrismaClient} = require('../BaseDatos/generated/prisma');
const prisma = new PrismaClient();

async function main() {

    // Creamos un nuevo usuario
    const user = await prisma.user.create({
        data: {
            name: "Francisco José Cabrera Bermejo",
            email: "francisco" + Date.now() + "@gmail.com", // Para evitar duplicados añadimos el timestamp
            password: "123456789"
        }
    });
    console.log("Usuario creado: ", user);

    // Creamos un nuevo pedido, el cual va a ser asociado al usuario
    const pedido = await prisma.pedido.create({
        data: {
            nombre: "Pedido de Francisco",
            email: "cliente@gmail.com",
            autorId: user.id
        }
    });
    console.log("Pedido creado: ", pedido);

    // Consultamos los datos relacionales, devuelvo los usuarios con los pedidos asociados
    const resultado = await prisma.user.findMany({
        include: {
            pedidos: true   // Se debe de tener la misma sintaxis que la que tenemos declarada en el modelo de usuarios
        }
    });
    console.log("Usuarios con pedidos: ", JSON.stringify(resultado, null, 2));


}

main()
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());