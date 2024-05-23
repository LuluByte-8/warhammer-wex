-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.userprofile (
    user_id SERIAL PRIMARY KEY UNIQUE,
    firebase_id VARCHAR NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE
);



COMMIT;
