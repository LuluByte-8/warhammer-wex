-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.customarmy (
    customarmy_id SERIAL PRIMARY KEY UNIQUE,
    firebaseuser_id VARCHAR NOT NULL,
    customarmy_faction TEXT NOT NULL,
    username TEXT NOT NULL,
    description TEXT NOT NULL,
    customarmy_name TEXT NOT NULL,

    CONSTRAINT fk_firebaseuser_id FOREIGN KEY(firebaseuser_id) REFERENCES warhammer.userprofile(firebase_id) ON DELETE CASCADE,
    CONSTRAINT fk_customarmy_faction FOREIGN KEY(customarmy_faction) REFERENCES warhammer.armies(id) ON DELETE CASCADE,
    CONSTRAINT fk_username FOREIGN KEY(username) REFERENCES warhammer.userprofile(username) ON DELETE CASCADE
);



COMMIT;
