let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());


const productoUno = {
    id: 1,
    nombre:"Mascarilla",
    stock:204,
    precio:42.9,
};
const productoDos = {
    id: 2,
    nombre:"Cremarizos",
    stock:58,
    precio:10.3,
};
const productoTres = {
    id: 3,
    nombre:"Espuma",
    stock:197,
    precio:17.8,
};
const productoCuatro = {
    id: 4,
    nombre:"Laca",
    stock:85,
    precio:23.9,
};

let productos = [productoUno, productoDos , productoTres , productoCuatro];


app.get("/productosDestacados", function(request, response){
    response.send(productos);
});



app.get("/producto/:id/:nombre", function(request,response){
    const productoNombre = request.params.nombre;
    const productoId = request.params.id;
    let cadenaId = "";
    for(let i = 0 ; i < productos.length ; i++){
        if(productoId == productos[i].id){
            cadenaId = productoId;
            break;
        }
    }  
    response.send(cadenaId);
});

app.get("/login", function(request,response){

});

app.get("/registro", function(request,response){

});

app.get("/productos-destacados", function(request, response){


    response.send(productos);
});

app.listen(8801, function(){
    console.log("API lista para recibir llamadas.");
});












