-- Deploy warhammerworkexperience:20231201-2-categories to pg

BEGIN;

INSERT INTO 
    warhammer.userprofile (firebase_id, username) 
VALUES
    ('0b6QzrYUmxaNmyy6u8KUuNA0mBe2','TestUser'),
    ('lL1MVfOj2secQAuCXrs39vS4PVM2','TestUser3');

COMMIT;
