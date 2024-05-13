-- Deploy warhammerworkexperience:20231201-2-customarmy to pg

BEGIN;

INSERT INTO 
    warhammer.customarmy (customarmyid, firebaseuserid, customarmytype, username, customarmyname) 
VALUES
    ('1', '0b6QzrYUmxaNmyy6u8KUuNA0mBe2', 'DG', 'TestUser', 'TestArmy');

COMMIT;