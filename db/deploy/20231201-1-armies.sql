-- Deploy warhammerworkexperience:20231201-1-armies to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.armies (
    id TEXT PRIMARY KEY UNIQUE,
    category_id INT NOT NULL,
    name TEXT NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,
    banner_url TEXT,
    CONSTRAINT fk_categoryid FOREIGN KEY(category_id) REFERENCES warhammer.categories(id) ON DELETE CASCADE
);

COMMIT;
