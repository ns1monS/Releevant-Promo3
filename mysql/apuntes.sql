/*


IMPORTANTE!!!
AQUELLOS SCRIPTS SIN COMENTAR APUNTES PENDIENTES POR COMENTAR
IGNORAR Y MIRAR SOLO LOS EXPLICADOS Y COMENTADOS


mayor que >
menor que <

mayor o igual que >=
menor o igual que <=



HACEN LO MISMO !!!!
distinto que <>
distinto de !=

*/

/*
 MAX : Maximo de conjunto de valores 

 SELECT MAX(Price) AS LargestPrice FROM Products;


 MIN : Mínimo  de un coonjunto de valores




*/







select cliente.nombre,factura.id,producto.producto from cliente,factura,producto
where producto.producto>1

/*con esto podemos sacar los productos de forma descendente que superior a 1
*/

SELECT COUNT(DISTINCT id) FROM cliente;


/*con esto podemos contar todas las filas que tenemos de dicha columna
*/



/*
The WHERE clause can be combined with AND, OR, and NOT operators.

The AND and OR operators are used to filter records based on more than one condition:

The AND operator displays a record if all the conditions separated by AND are TRUE.
The OR operator displays a record if any of the conditions separated by OR is TRUE.
The NOT operator displays a record if the condition(s) is NOT TRUE.

*/



SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;

/*con esto seleccionamos las columnas de una tabla y les daremos didferentes condiciones con el or
*/



SELECT * FROM country
where continent='Europe';

/*con esto seleccionamos todas las las columnas con el continente europa
*/




SELECT * FROM country
where LifeExpectancy between 50 and 70

/*con esto seleccionamos la esperanza de vida entre 50 y 70 años
*/

SELECT Name FROM country
where continent in ("Asia","Europe");

SELECT Name FROM country
where continent = "Europe" or "Asia";

SELECT Name FROM country
where "Europe" = Continent or Continent = "Asia"


/*con esto seleccionamos de tresa maneras los paises(NAME) que se encuentren en los continentes europa y asia
*/

SELECT Name FROM country
WHERE Name LIKE 'a%';


/*con esto seleccionamos aquellos paises que empiecen con la letra a
*/


SELECT Name FROM country
WHERE Name LIKE '%a';

/*con esto seleccionamos aquellos paises que acaben con la letra a
*/


SELECT Name FROM country
WHERE Name LIKE '_a%';

/*con esto seleccionamos aquellos paises que su segunda letra sea la letra a
*/

SELECT * FROM country
where IndepYear is null


/*con esto seleccionamos aquellos paises su independeceyear sean null 
*/
 x 


SELECT * FROM city
where population < (select avg(population) from city
where CountryCode = "ESP")

/*comprobar este script*/




SELECT MAX(population) FROM world.city
where countrycode = "ESP"
order by Population desc;

/*con esto podemos sacar el pais con mayor población
*/


SELECT * FROM world.city
where countrycode = "ESP"
order by Population desc;

/*con esto podemos sacar las ciudades con el codigo de pais ESP */


SELECT Indepyear, COUNT(*) FROM country
where Indepyear > 0
group by 1;


SELECT Indepyear, COUNT(*) FROM country
where Indepyear > 0
group by 1
having count(*) > 10;


select distinct lower(continent) from country
where substr(lower(continent),1,1) = "a";   
--------------------------------------------------------------

SELECT  district,COUNT(*) FROM city
where CountryCode = "ESP"
group by District;

<-- con esto seleccionamos el numero de ciudades agrupados por comunidades autonomas


/* Ejercicio 1 */

SELECT count(*) FROM world.city
where CountryCode = "ESP" 
and Population>100000

/* Ejercicio 2 */

SELECT * FROM country
where IndepYear is not null



/* Ejercicio 3 */
SELECT avg(Population) FROM world.country

/* Ejercicio 4 */

SELECT avg(Population) FROM world.country
where continent = "Europe";

/* Ejercicio 5 */

SELECT distinct IndepYear FROM world.country
where IndepYear > 1990


/* Ejercicio 6 */


SELECT Name FROM city
where CountryCode = "ITA" 
and (Name LIKE '%a%'
or Name LIKE '%e%'
or Name LIKE '%o%')


---- Con este ejercicio podemos mostrar las ciudades de italia  que puedan  contener la letra a e o -----


SELECT Name FROM city
where CountryCode = "ITA" 
and Name LIKE '%a%'
and Name LIKE '%e%'
and Name LIKE '%o%'


---- Con este ejercicio podemos mostrar las ciudades de italia  que deban contener la letra a e o -----


select * from city 
where countrycode = 'ESP' and District = 'Andalusia' or Population < 2000000



/* INNER JOIN */

SELECT usuarios.username, juegos.juegoname 
/* seleccionamos las columnas a mostrar que serian los username de la tabla usuarios y los juegoname de la tabla de juegos  */
FROM usuarios 
INNER JOIN juegousuario ON usuarios.ID = juegousuario.ID_usuario  
/* este primer inner joun nos permite unir la tabla juego usuario con la tabla de usuario con la tabla juegousuarios */

INNER JOIN juegos ON juegousuario.ID_juego = juegos.ID
/* con este join unimos la tabla juegos con la tabla juegousuario */






select customers.customerNumber, customers.contactFirstName,
orders.orderNumber, orders.customerNumber 
from customers, orders
where customers.customerNumber = orders.customerNumber;
/*esto nos permite seleccionar los eementos customerNumber contactfirstNAame de la tabla de customers
y orderNumber y customerNumber de la tabla de orders*/



---- Ignorar completamente---

INSERT INTO `proveedores`(`idProveedores` , `nombre` , `direccion` , `ciudad` , `provincia`)
VALUES(1 , "Prolongo" , "calle mandarinas" , "mala" , "malaga");


update orders set comments = 'Prueba' , status = "no se que "
where orderNumber = 10300



select * 
from `classicmodels`.`orderdetails`;
insert into orderdetails
values(10100,"S10_4698",10,120,0,99), (10100,"S12_4675",20,130.0,101);


select * from products

select * from city;
update city set Name = 'alhaurin del grande'
where  Name = 'alhaurin de la torre'

select * 
from `classicmodels`.`orderdetails`;
insert into orderdetails (ProductCode, quantityOrdered,priceEach,orderLineNumber,Ordernumber)
values(10100,"S12_4675",20,130.0,101);	

CREATE view CITY_WITH_COUNTRY AS
SELECT city.ID, city.NAME, city.CountryCode,
country.Name as nameCountry
from city, country
where city.CountryCode = country.Code



mysql> BEGIN;
Query OK, 0 rows affected (0.00 sec)

mysql> INSERT INTO innotest VALUES(4);
Query OK, 1 row affected (0.00 sec)

mysql> SELECT * FROM innotest;
+-------+
| campo |
+-------+
|     1 |
|     2 |
|     3 |
|     4 |
+-------+
4 rows in set (0.00 sec)

mysql> EXIT;
Bye

mysql> BEGIN;
Query OK, 0 rows affected (0.00 sec)

mysql> INSERT INTO innotest VALUES(4);
Query OK, 1 row affected (0.00 sec)

mysql> COMMIT;
Query OK, 0 rows affected (0.02 sec)

mysql> EXIT;
Bye

---- fin de la ignoración-----

---EJERCICIOS HASTA EL 17---


/*Ejercicio 7*
Mostrar la suma total de ventas de la tabla de detalle de albaranes. Resultado:
9604190.61 */   

SELECT sum(priceEach*quantityOrdered) FROM classicmodels.orderdetails; 9604190.61

/*Ejercicio 8*
Mostrar cuantas líneas de venta tienen un importe entre 10000 y 20000. Resultado: 6.
El valor de la línea de venta se obtiene de multiplicar las unidades por el precio. *

*/

SELECT count(orderdetails.orderLineNumber) FROM classicmodels.orderdetails
where orderdetails.priceEach*orderdetails.quantityOrdered 
between 10000 and 20000



/* Ejercicio 9
Mostrar cuantos países no tienen fecha de independencia. Resultado: 47*/

SELECT count(name) FROM world.country
where IndepYear is  null

/*Solucion alternativa*/

SELECT count(*)-count(indepyear) from world.country

/*Ejercicio 10 */
select count(name) from country where indepyear between 1920 and 1950;

/*11. Buscar cuantas ciudades hay en Francia cuyo nombre termine en “is”. Resultado: 1.*/

SELECT count(Name) FROM city
where CountryCode = "FRA" 
and Name LIKE '%is'

/*12. Mostrar en una línea la media, el máximo y el mínimo de los años de independencia de
todos los países del mundo. Resultado: 1847.2604, 1994, -1523*/

SELECT min(IndepYear),max(IndepYear),avg(IndepYear) 
FROM country

/* 13. Mostrar los continentes donde haya países con el año de independencia informado 
Resultado: Asia, Africa, Europe, South America, North America y Oceania*/

SELECT  DISTINCT Continent FROM world.country
where IndepYear is not null

/*14. Cuántos países hay en el continente África. Resultado: 58.
*/

SELECT count(Name) FROM world.country
where Continent = "Africa"

/*15. Mostrar el número de países por cada año de independencia, donde el año de
independencia sea superior a 1980. Resultado: 8 filas.*/

SELECT   IndepYear,count(*) FROM world.country
where IndepYear is not null and IndepYear > 1980
group by indepyear

/*16. Mostrar los años de independencia en los que dos o más países la consiguieron, donde
el año de independencia sea superior a 1980. Resultado: 4 filas.*/

SELECT count(name), indepyear from country 
where IndepYear >1980 
group by IndepYear HAVING COUNT(1)>1

/*17. Mostrar las ciudades del mundo que existen más de una vez y cuántas veces se repiten.
Resultado: 67 filas.*/

select name,count(name) from city 
group by name
having count(name)>1

select customers.customerNumber, orderNumber,orders.customerNumber, customerName
from customers left join orders
on customers.customerNumber = order.customerNumber

select customers.customerNumber, orderNumber,orders.customerNumber, customerName
from orders right join customers
on customers.customerNumber = orders.customerNumber




 left join

inner join

right outer join


full outer join

cross join

left outer join

right outer join


full outer join
