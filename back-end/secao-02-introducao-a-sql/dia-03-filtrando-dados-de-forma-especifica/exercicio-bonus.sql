USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE "%e%";

USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE "A%" ORDER BY Name;

USE Scientists;
SELECT Code, Name FROM Projects
WHERE Code LIKE "%3%" ORDER BY Name;

USE Scientists;
SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

USE Scientists;
SELECT * FROM Projects
WHERE Hours > 500;

USE Scientists;
SELECT * FROM Projects WHERE Hours > 250 AND Hours < 800;
-- ou
SELECT * FROM Projects WHERE Hours BETWEEN 251 AND 799;

USE Scientists;
SELECT Code, Name FROM Projects
WHERE Name NOT LIKE 'A%';

USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE '%H%';

