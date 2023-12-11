-- Revert warhammerworkexperience:20231124-initial-db from pg

BEGIN;

DROP SCHEMA IF EXISTS warhammer CASCADE;

COMMIT;
