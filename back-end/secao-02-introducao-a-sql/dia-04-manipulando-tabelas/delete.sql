SET SQL_SAFE_UPDATES = 0;

-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'KARL';
-- Em seguida, apague suas referências
DELETE FROM sakila.film_actor
WHERE actor_id = 12;
-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'KARL';

-- Primeiro descubra os IDs relacionados ao nome
SELECT actor_id
FROM sakila.actor
WHERE first_name = 'MATTHEW';
-- Em seguida, apague as referências
DELETE FROM sakila.film_actor
WHERE actor_id IN (8, 103, 181);
-- Depois exclua o item original
DELETE FROM sakila.actor
WHERE first_name = 'MATTHEW';

DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;