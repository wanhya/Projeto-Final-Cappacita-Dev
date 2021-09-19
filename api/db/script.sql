CREATE DATABASE IF NOT EXISTS desafio;
USE desafio;
CREATE TABLE IF NOT EXISTS comentario (
    id INT(11) AUTO_INCREMENT,
    descricao VARCHAR(255),
    PRIMARY KEY(id) );
    INSERT INTO comentario VALUE (0, 'Gostei do filme');
    INSERT INTO comentario VALUE (0, 'não gostei do filme');