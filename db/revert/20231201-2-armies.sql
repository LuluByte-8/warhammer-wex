-- Revert warhammerworkexperience:20231201-2-armies from pg

BEGIN;

DROP TABLE IF EXISTS warhammer.armies;

COMMIT;
