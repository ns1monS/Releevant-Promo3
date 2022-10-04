/*
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
