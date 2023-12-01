-- Revert warhammerworkexperience:20231201-1-armies from pg

BEGIN;

DROP TABLE IF EXISTS warhammer.armies;

COMMIT;
