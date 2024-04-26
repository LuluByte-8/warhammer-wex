-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.customarmy (
    customarmyId SERIAL PRIMARY KEY UNIQUE,
    userId SERIAL,
    username TEXT NOT NULL UNIQUE,
    unitsinarmyid SERIAL,

    CONSTRAINT fk_userId FOREIGN KEY(userId) REFERENCES warhammer.userprofile(userId) ON DELETE CASCADE,
    CONSTRAINT fk_username FOREIGN KEY(username) REFERENCES warhammer.userprofile(username) ON DELETE CASCADE,
    CONSTRAINT fk_unitsinarmyid FOREIGN KEY(unitsinarmyid) REFERENCES warhammer.unitsinarmy(unitsinarmyid) ON DELETE CASCADE
);



COMMIT;
