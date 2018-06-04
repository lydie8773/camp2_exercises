CREATE USER camp2 WITH PASSWORD 'camp2';

CREATE DATABASE camp2 OWNER camp2;

GRANT ALL PRIVILEGES ON DATABASE "camp2" TO camp2;

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO camp2;

CREATE TABLE brands (
    id VARCHAR(100),
    title VARCHAR(100)
);

CREATE TABLE categories (
    id VARCHAR(255),
    decathlon_id INT,
    label VARCHAR(255)
);

CREATE TABLE products (
    id VARCHAR(255),
    decathlon_id INT,
    title VARCHAR(255),
    description VARCHAR(255),
    brand_id VARCHAR(255),
    min_price VARCHAR(255),
    max_price VARCHAR(255),
    crossed_price VARCHAR(255),
    percent_reduction VARCHAR(255),
    image_path VARCHAR(255),
    rating VARCHAR(255)
);
