const app = require ('express')();
const http = require('http').Server(app);
const io = require ('socket.io')(http, {
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket)=>{
    console.log("Nuevo usuario conectado");

    socket.on("test", (objeto)=>{
        console.log("Escucha TEST con texto: " + objeto.text)
        socket.emit("test2", objeto);

    });
});




app.get('/', (req, res)=>{
    res.send('<h1>Hola Mundo</h1>')
});

http.listen(3000, ()=>{
    console.log("Escuchando puerto 3000");
})
