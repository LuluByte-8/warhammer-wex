-- Deploy warhammerworkexperience:20231201-1-unit to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.units (
    id SERIAL PRIMARY KEY,
    army_id INT,
    name TEXT NOT NULL UNIQUE,
    movement INT NOT NULL,
    toughness INT NOT NULL,
    saving_throw INT NOT NULL,
    wounds INT NOT NULL,
    leadership INT NOT NULL,
    objective_control INT NOT NULL,
    invuln_save INT NOT NULL DEFAULT 0,
    CONSTRAINT fk_unitid
        FOREIGN KEY(army_id)
            REFERENCES warhammer.armies(id)
            ON DELETE SET NULL
);

COMMIT;
