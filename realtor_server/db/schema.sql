\c realtordb

DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) UNIQUE,
  password VARCHAR(255)
)