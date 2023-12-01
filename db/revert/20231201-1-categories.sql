-- Revert warhammerworkexperience:20231201-1-categories from pg

BEGIN;

DROP TABLE IF EXISTS warhammer.categories;

COMMIT;
