-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.regiments (
    regiment_id SERIAL PRIMARY KEY UNIQUE,
    customarmy_id SERIAL,

    CONSTRAINT fk_customarmy_id FOREIGN KEY(customarmy_id) REFERENCES warhammer.customarmy(customarmy_id) ON DELETE CASCADE
   
);



COMMIT;
