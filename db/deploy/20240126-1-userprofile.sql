-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.userprofile (
    userId SERIAL PRIMARY KEY,
    firebaseId VARCHAR NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE
);



COMMIT;
