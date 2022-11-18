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
Bye66
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

/* 18  Mostar las ciudades de más de un millón de habitantes donde se hable español en el 
país. Resultado: 39 filas. */

select * from countrylanguage  join country 
on countrylanguage.CountryCode = country.Code
join city
on Country.code = city.CountryCode
where Language = "Spanish"
and city.Population > 1000000


/* EXTRA Queremos sacar ciudades con mas de un millon de habitantes y veamos el nombre de la 
ciudad y pais al que pertenece*/

select city.name, country.name,city.Population from city join country
on city.CountryCode = country.Code
where city.population > 2000000
ORDER BY 3 desc 


/* EXTRA los paises con ciuades de mas de 2 millones de habitantes y en orden descendente */

select  country.name,count(city.name) from city join country
on city.CountryCode = country.Code
where city.population > 2000000
group by 1
order by 2 desc



/* 19  Mostrar el número de clientes que ha comprado el producto S24_1937. Resultado: 24 
clientes. */
select count(distinct customerNumber) from orders join orderdetails
on orders.orderNumber = orderdetails.orderNumber
where productCode = "s24_1937"

/*20  Obtener para cada categoría de producto (productLine) el precio máximo, mínimo y 
medio de la categoría.*/    

select products.productLine, max(products.buyPrice),
min(products.buyPrice), avg(products.buyPrice) 
from products
join productLines
on products.productline = productlines.productLine
group by 1

/*21 Obtener la lista de empleados con el nombre de su jefe.*/



	/*23 */
	select concat(employees.firstName, ' ',employees.lastName) as empleados,
date_format(orders.orderDate, "%Y%d"),
sum(orderdetails.quantityOrdered*orderdetails.priceEach) as ventas
from classicmodels.customers, classicmodels.orders , classicmodels.orderdetails,
classicmodels.employees
where customers.customerNumber = orders.customerNumber
and orders.orderNumber = orderdetails.orderNumber
and customers.salesRepEmployeeNumber = employees.employeeNumber
group by 1,2 ;



/*Obtener la lista de clientes y el importe de sus compras, 
hayan comprado o no*/



select customers.customerName , payments.amount from customers
left join payments
on customers.customerNumber = payments.customerNumber
group by customers.customerName





/*Obtener el código y el nombre de los clientes que no hayan comprado*/

select customers.customerNumber , customers.customerName from customers
left join payments
on customers.customerNumber = payments.customerNumber
where  payments.amount is  null
group by customers.customerName 



/*Este para nota: Total ventas de todos los empleados,
 tengan o no ventas (difícil)*/



/*Cuantos clientes hay en cada oficina?*/







select count(customers.customerName), offices.officeCode,offices.city from customers
join offices
on customers.city = offices.city
group by customers.city

/*Cuál es la deuda de los clientes?*/



/*Ejercicio hecho en clase*/

/*Hecho con JOIN*/

select city.name as a1 , country.Code  as codigo from country
join city 
on city.CountryCode = country.Code 
where country.Name like 'E%'

/*Hecho con dos select*/

select name,countrycode
from city
where city.CountryCode in (select code  from country where Name like 'E%')



/*GRUPOS DE EJERCICIOS 2 */


/*1. Contar los paises con menos de 10.000 habitantes. Resultado: 19.*/

select country.Name , Country.Population from country
where Population< 10000

/*2. Contar los paises con más de 9999 habitantes y menos de 50001. Resultado: 15.*/

select country.Name , Country.Population from country
where Population between 10000 and 50001


/*3. Contar los continentes con algún pais con una esperanza de vida menor del 50% (LifeExpectancy).
Resultado: 3.*/

select count(distinct(country.Continent)) from country
where LifeExpectancy < 50



/*4. Contar los paises con esperanza de vida informada. Resultado: 222.*/

select count(country.name) from country 
where LifeExpectancy is not null



/*5. Contar los paises con esperenza de vida sin informar. Resultado: 17.*/


select count(country.name) from country 
where LifeExpectancy is  null




/*6. Mostrar los códigos de pais que tienen ciudades llamadas Cordoba, Sevilla o Cadiz. Resultado: ARG,
ESP, PHL, MEX.*/


select   distinct(city.CountryCode) from city
where city.Name in ("Cordoba","Sevilla","Cadiz")




/*7. Contar las regiones/distritos (district) que tiene España (ESP). Resultado: 17.*/

select count(distinct(city.district)) from city
where CountryCode = "ESP"


/*8. Mostrar el nombre y los habitantes de las ciudades de las regiones cuyo nombre contenga 'Kata'.
Resultado: 9*/

select count(distinct(city.district)) from city
where CountryCode = "ESP"
like '%kata%'

select city.name , select city.population from city
where city.district like "%kata"


/*Ejercicios con group by*/



/*9. Mostrar las formas de gobierno y el número de paises de Europa (Continent) donde la forma de
gobierno contenga 'public' o su año de independecia sea menor de 1500. Resultado: 5*/


select  distinct(GovernmentForm),count(Name) from country
where GovernmentForm  LIKE ("%public%")
and IndepYear < 1500
group by Continent = "Europe"


/*10. Mostrar el número de paises por continente donde ha habido un incremento positivo de producto
interior bruto (GNP-GPNOld). Mostrar ordenado por el número de paises en orden descendente.*/

select count(country.name) from country
where GNP >GNPOld 
group by Continent DESC

/*
11. El mismo ejercicio anterior, pero solo mostrar los grupos que tengan menos de 10 paises.*/

select count(country.name) from country
where GNP >GNPOld 
and count(country.name) < 10
group by Continent DESC



SELECT continent,count(*) from country where GNP-GNPold > 0 group by 1 order by 2 desc	


/*12 Mostrar los paises de Oceania con el nombre de su capital.*/


SELECT country.name as Pais , city.Name as capital 
from country
join city 
on city.id = country.Capital
where Continent = "Oceania"


/* 13 Mostrar pais y capital de paises donde el español se hable más de un 70% (campos Language y
Percentage), ordenado por la población del pais en orden descendente.*/

SELECT distinct country.name as Pais , city.Name as capital 
from country
join city 
on city.id = country.Capital
join countrylanguage
on countrylanguage.CountryCode = country.Code
where countrylanguage.Language = "Spanish" 
and countrylanguage.Percentage >70
group by country.Population desc


/*Obtener listado de ventas*/
select DISTINCT * ,  usuario.nombre, "tarjeta" 
as tipodepago from pedido , usuario where  usuario.id = 1


select distinct * from pedido
join usuario
on usuario.id = pedido.usuario

select sum(cantidad), usuario.nombre, productos.nombre from pedido
join usuario 
on usuario.id = pedido.usuario
join productos 
on productos.id	= pedido.producto
where productos.nombre = (select productos.nombre from productos
 group by 1 order by pedido.cantidad desc limit 1);

