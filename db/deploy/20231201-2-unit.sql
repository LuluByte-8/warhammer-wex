-- Deploy warhammerworkexperience:20231201-2-unit to pg

BEGIN;

INSERT INTO 
    warhammer.units (army_id, name, movement, toughness, saving_throw, wounds, leadership, objective_control, invuln_save) 
VALUES
    (1,'Roboute Guilliman',8,9,2,10,5,4,4),
    (2,'High Marshal Helbrecht',6,4,2,5,5,2,4),
    (3,'Commander Dante',12,4,2,6,6,1,4),
    (4,'Lion ElJonson',8,9,2,10,5,5,3),
    (5,'Watch Captain Atemis',6,4,3,4,6,1,4),
    (6,'Kaldor Draigo',5,5,2,7,6,1,4),
    (7,'Tor Garadon',5,6,3,6,6,1,4),
    (8,'Iron Father Feirros',5,6,2,6,6,1,0),
    (9,'Kayvaan Shrike',12,4,3,5,6,1,4),
    (10,'Vulkan Hestan',6,4,2,5,6,1,4),
    (11,'Bjorn The Fell-Handed',8,9,2,8,6,3,0),
    (12,'Korsarro Khan',6,4,3,5,6,1,4),
    (13,'Morvenn Vahl',8,6,2,8,6,2,4),
    (14,'Trajann Valoris',6,6,2,7,5,2,4),
    (15,'Belisarius Cawl',6,8,2,10,6,3,4),
    (16,'Lord Inquisitor Kyria Draxus',6,3,3,4,6,1,5),
    (17,'Ursula Creed',6,3,4,4,7,1,5),
    (18,'Knight Paladin',10,12,3,22,6,10,5),
    (19,'Belakor',12,10,4,18,6,5,4),
    (20,'Abaddon the Despoiler',5,5,2,9,5,4,4),
    (21,'Chaos Knight Castigor',12,12,3,25,6,10,5),
    (22,'Mortarion',10,12,2,16,5,6,4),
    (23,'Magnus the Red',14,11,2,16,5,6,4),
    (24,'Angron',14,11,2,16,5,6,4),
    (25,'Avatar of Khaine',10,12,2,14,6,5,4),
    (26,'Lelith Hespearax',8,3,6,4,6,1,4),
    (27,'Reductus Saboteur',6,3,5,3,7,1,0),
    (28,'The Silent King',7,10,2,16,5,6,4),
    (29,'Boss Snikrot',6,5,5,6,6,1,5),
    (30,'Commander Farsight',10,5,3,6,6,2,4),
    (31,'Neurotyrant',6,8,4,9,7,3,4),
    (32,'Grimnyr',5,5,4,4,6,1,4);



COMMIT;
