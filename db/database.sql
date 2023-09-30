CREATE DATABASE shopStore

use shopStore;

CREATE TABLE articles (
  id INT(11) NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(45) DEFAULT NULL,
  categoria VARCHAR(45) DEFAULT NULL,
  precio INT(10) DEFAULT NULL,
  valorT INT(10) DEFAULT NULL,
  stock INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
)

show tables
DESCRIBE articles;

INSERT INTO articles VALUES
(1, 'pantalon', 'deportiva', 50000, 70000, 5),
(2, 'camisa', 'casual', 2000, 105000, 10),
(3, 'sueter', 'elegante', 30000, 80000, 2),
(4, 'falda', 'casual', 70000, 70000, 2)


