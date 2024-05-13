-- Deploy warhammerworkexperience:20231201-2-unitsinarmy to pg

BEGIN;

INSERT INTO 
    warhammer.unitsinarmy (unitsinarmyid, id, customarmyid, unit_id, name, line, minunits, maxunits, cost) 
VALUES
    ('1', '765', '1', '1044', 'Plague Matine', '1', '4', '9', '19');

COMMIT;
