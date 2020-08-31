DROP DATABASE IF EXISTS tasks_list_app;
CREATE DATABASE tasks_list_app;
USE tasks_list_app;

CREATE TABLE task(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255)
);

INSERT INTO task (id, name, description) VALUES (
  1, 'Escribir', 'Tengo que escribir un articulo'
);
