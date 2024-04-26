-- Deploy warhammerworkexperience:20240126-1-userprofile to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.unitsinarmy (
    unitsinarmyid SERIAL PRIMARY KEY UNIQUE,
    id SERIAL NOT NULL,
    unit_id INT NOT NULL,
    name TEXT NOT NULL,
    line INT NOT NULL,
    minUnits INT NOT NULL,
    maxUnits INT NOT NULL,
    cost INT NOT NULL DEFAULT 0,

    CONSTRAINT fk_id FOREIGN KEY(id) REFERENCES warhammer.units(id) ON DELETE CASCADE
   
);



COMMIT;
