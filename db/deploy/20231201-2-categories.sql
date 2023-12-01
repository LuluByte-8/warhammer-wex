-- Deploy warhammerworkexperience:20231201-2-categories to pg

BEGIN;

INSERT INTO 
    warhammer.categories (name, banner_url) 
VALUES
    ('Space Marines', '/images/SpaceMarineBanner.png'),
    ('Armies of the Imperium', '/images/ImperiumBanner.png'),
    ('Forces of Chaos', '/images/ChaosBanner.png'),
    ('Xenos Armies', '/images/XenosBanner.png');

COMMIT;
