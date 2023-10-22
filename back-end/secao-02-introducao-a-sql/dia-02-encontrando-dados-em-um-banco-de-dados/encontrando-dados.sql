SELECT 'Olá, bem-vindo ao SQL!';
SELECT 10;
SELECT now();
SELECT 20 * 2;
SELECT 50 / 2;
SELECT 18 AS idade;
SELECT 2019 AS ano;
SELECT 'Rafael', 'Martins', 25, 'Desenvolvedor Web';
SELECT 'Rafael' AS nome, 'Martins' AS sobrenome, 25 AS idade, 'Desenvolvedor Web' AS 'Área de atuação';

SELECT 'amanda', 'santos', 'Belo Horizonte', 19;

SELECT 'amanda' AS Nome, 'santos' AS Sobrenome, 'Belo Horizonte' AS 'Cidade Natal', 19 AS Idade;

SELECT 13*8;

SELECT now() as "Data Atual";

SELECT * FROM sakila.city;

SELECT first_name, last_name FROM sakila.customer;

SELECT * FROM sakila.rental;

SELECT title, description, release_year FROM sakila.film;

SELECT * FROM sakila.nome_da_tabela;

SELECT * FROM sakila.country;

SELECT CONCAT(title, " ", release_year) AS "Lançamento do Filme" FROM sakila.film;

SELECT CONCAT(address, " ", district) AS Endereço FROM sakila.address;

SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

SELECT DISTINCT Idade FROM Escola.Estudantes;

SELECT COUNT(password) FROM sakila.staff;

SELECT COUNT(*) FROM sakila.staff;

SELECT * FROM sakila.actor LIMIT 10 OFFSET 4;

SELECT * FROM sakila.film;

SELECT title, release_year, rating FROM sakila.film;

SELECT COUNT(*) FROM sakila.film;

SELECT DISTINCT last_name FROM sakila.actor;

SELECT COUNT(DISTINCT last_name) FROM sakila.actor;

SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;

SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20;

