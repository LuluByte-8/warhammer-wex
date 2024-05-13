-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.customarmy (
    customarmyId SERIAL PRIMARY KEY UNIQUE,
    firebaseUserId VARCHAR NOT NULL,
    customArmyType TEXT NOT NULL,
    username TEXT NOT NULL UNIQUE,
    customarmyName TEXT NOT NULL,

    CONSTRAINT fk_firebaseUserId FOREIGN KEY(firebaseUserId) REFERENCES warhammer.userprofile(firebaseid) ON DELETE CASCADE,
    CONSTRAINT fk_customArmyType FOREIGN KEY(customArmyType) REFERENCES warhammer.armies(id) ON DELETE CASCADE,
    CONSTRAINT fk_username FOREIGN KEY(username) REFERENCES warhammer.userprofile(username) ON DELETE CASCADE
);



COMMIT;
