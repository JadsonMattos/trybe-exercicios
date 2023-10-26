USE pixar;
SELECT m.title, b.domestic_sales, b.international_sales
FROM movies m
INNER JOIN box_office b ON b.movie_id = m.id;

USE pixar;
SELECT m.title, (b.domestic_sales + b.international_sales) AS "Vendas"
FROM movies m
INNER JOIN box_office b ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales;

USE pixar;
SELECT m.title, b.rating
FROM movies m
INNER JOIN box_office b ON b.movie_id = m.id
ORDER BY b.rating DESC;

USE pixar;
SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater t
LEFT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;

USE pixar;
SELECT t.id, t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM theater t
RIGHT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;

USE pixar;
SELECT m.id, m.title, m.director, m.year, m.length_minutes, m.theater_id
FROM movies m 
INNER JOIN box_office b ON b.movie_id = m.id
WHERE b.rating > 8 AND m.theater_id IS NOT NULL;