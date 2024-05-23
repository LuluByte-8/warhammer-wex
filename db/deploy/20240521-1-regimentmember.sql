-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.regimentmember (
    regiment_member_id SERIAL PRIMARY KEY UNIQUE,
    regiment_id SERIAL NOT NULL,
    unit_id SERIAL NOT NULL,
    squad_id SERIAL NOT NULL,

    CONSTRAINT fk_squad_id FOREIGN KEY(squad_id) REFERENCES warhammer.squads(squad_id) ON DELETE CASCADE,
    CONSTRAINT fk_unit_id FOREIGN KEY(unit_id) REFERENCES warhammer.units(unit_id) ON DELETE CASCADE,
    CONSTRAINT fk_regiment_id FOREIGN KEY(regiment_id) REFERENCES warhammer.regiments(regiment_id) ON DELETE CASCADE,
   
);



COMMIT;
