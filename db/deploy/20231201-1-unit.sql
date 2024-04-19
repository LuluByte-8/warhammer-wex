-- Deploy warhammerworkexperience:20231201-1-unit to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.units (
    id SERIAL PRIMARY KEY UNIQUE,
    unit_id INT NOT NULL,
    faction_id TEXT NOT NULL,
    line INT NOT NULL,
    name TEXT NOT NULL,
    M TEXT NOT NULL,
    WS TEXT NOT NULL,
    BS TEXT NOT NULL,
    S TEXT NOT NULL,
    T TEXT NOT NULL,
    W TEXT NOT NULL,
    A TEXT NOT NULL,
    Ld TEXT NOT NULL,
    Sv TEXT NOT NULL DEFAULT 0,
    models_per_unit TEXT NOT NULL,
    cost INT NOT NULL DEFAULT 0,
    CONSTRAINT fk_factionid
        FOREIGN KEY(faction_id)
            REFERENCES warhammer.armies(id)
            ON DELETE CASCADE
);

COMMIT;
