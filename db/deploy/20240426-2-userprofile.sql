-- Deploy warhammerworkexperience:20231201-2-categories to pg

BEGIN;

INSERT INTO 
    warhammer.userprofile (firebaseid, username) 
VALUES
    ('0b6QzrYUmxaNmyy6u8KUuNA0mBe2','TestUser');

COMMIT;
