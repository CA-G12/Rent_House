BEGIN;

DROP TABLE IF EXISTS owners, properties, renters CASCADE ;

CREATE TABLE owners(
    id SERIAL PRIMARY KEY,
    owner_name    VARCHAR(100) NOT NULL,
    contact VARCHAR(10)
); 

CREATE TABLE properties(
    id SERIAL PRIMARY KEY,
    prop_address VARCHAR(100) NOT NULL,
    img VARCHAR(255),
    price float,
    owner_id int,
    rent_start DATE,
    rent_end DATE,
    FOREIGN KEY(owner_id) REFERENCES owners(id)
); 


CREATE TABLE renters(
    id SERIAL PRIMARY KEY,
    renter_name    VARCHAR(100) NOT NULL,
    property_id int,
    FOREIGN KEY(property_id) REFERENCES properties(id)

); 


COMMIT;