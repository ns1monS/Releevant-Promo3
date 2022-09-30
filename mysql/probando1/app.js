/*
Con SELECT podemos seleccionar una o varias columnas de datos.
FROM table_references nos vale para seleccionar una o varias tablas que almacenan las columnas previamente indicadas.
En WHERE where_condition se especifican la o las condiciones que se deben cumplir para los valores solicitados.
Dentro de la claúsula WHERE tenemos los siguientes condicionantes que son importantes y útiles:

GROUP BY: Nos permite agrupar los datos obtenidos de la base de datos.
HAVING: Permite hacer cálculos y condiciones más complejas que no se pueden hacer con la cláusula WHERE.
ORDER BY: Ordenación por columna.
LIMIT: Especificación del número de filas devueltas.


ejemplos:

SELECT nombre FROM usuarios
SELECT nombre, apellidos FROM usuarios


Repaso a la cláusula WHERE MySQL, su funcionalidad es la de condicionar las consultas SELECT que se realizan a una base de datos.


INSER INTO para añadir nuevos elementos a la tabla 

ejemplos:

INSER INTO `city`(`ID`)

*/









let mysql = require('mysql');
let conexion= mysql.createConnection({
    host : 'localhost',
    database : 'ejemplo2',
    user : 'root',
    password : 'Limalimon2002',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log("Conectado a la base de datos");
});

conexion.query('SELECT * FROM usuarios', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

conexion.end();
