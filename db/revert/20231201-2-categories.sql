-- Revert warhammerworkexperience:20231201-2-categories from pg

BEGIN;

DROP TABLE IF EXISTS warhammer.categories;

COMMIT;
