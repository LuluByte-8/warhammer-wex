-- Deploy warhammerworkexperience:20231201-1-unit to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.squads (
    squad_id INT PRIMARY KEY UNIQUE,
    squad_name TEXT NOT NULL,
    faction_id TEXT NOT NULL,
    role TEXT NOT NULL,
    CONSTRAINT fk_factionid
        FOREIGN KEY(faction_id)
            REFERENCES warhammer.armies(id)
            ON DELETE CASCADE
);

COMMIT;
