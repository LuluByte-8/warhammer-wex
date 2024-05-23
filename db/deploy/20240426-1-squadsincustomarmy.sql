-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.squadsincustomarmy (
    squadsincustomarmy_id SERIAL PRIMARY KEY UNIQUE,
    squad_id SERIAL NOT NULL,
    customarmy_id SERIAL,
    name TEXT NOT NULL,

    CONSTRAINT fk_squad_id FOREIGN KEY(squad_id) REFERENCES warhammer.squads(squad_id) ON DELETE CASCADE,
    CONSTRAINT fk_customarmyId FOREIGN KEY(customarmy_id) REFERENCES warhammer.customarmy(customarmy_id) ON DELETE CASCADE
   
);



COMMIT;
