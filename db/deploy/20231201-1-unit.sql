-- Deploy warhammerworkexperience:20231201-1-unit to pg

BEGIN;

CREATE TABLE IF NOT EXISTS warhammer.units (
    unit_id SERIAL PRIMARY KEY UNIQUE,
    squad_id INT NOT NULL,
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
    minUnits INT NOT NULL,
    maxUnits INT NOT NULL,
    cost INT NOT NULL DEFAULT 0,
    CONSTRAINT fk_squadid
        FOREIGN KEY(squad_id)
            REFERENCES warhammer.squads(squad_id)
            ON DELETE CASCADE
);

COMMIT;