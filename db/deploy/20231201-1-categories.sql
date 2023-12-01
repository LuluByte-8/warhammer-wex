-- Deploy warhammerworkexperience:20231201-1-categories to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    banner_url TEXT
);



COMMIT;
