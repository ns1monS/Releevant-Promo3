let mysql = require("mysql")




let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',			
    password: 'Limalimon2002',
    database: 'ecommerce'});

    
    connection.connect(function(err) { 
        if (err) {
            return console.error('error: ' + err.message);
        }	
        console.log('Connected to the MySQL server.');
    });
    
   // Cerrar conexion
    
    connection.end(function(err) {  
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
































    // connection.connect(function(err) {
    //     if (err) throw err;
    //     connection.query("SELECT * FROM pedido", function (err, result, fields) {
    //       if (err) throw err;
    //       console.log(result);
    //     });
    //   });