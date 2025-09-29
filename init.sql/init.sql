CREATE TABLE IF NOT EXISTS usuario (
                                       id SERIAL PRIMARY KEY,
                                       nombre VARCHAR(100)
    );

INSERT INTO usuario (nombre) VALUES ('Alice'), ('Bob'), ('Charlie');
