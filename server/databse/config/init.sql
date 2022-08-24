BEGIN;

DROP TABLE IF EXISTS owners, properties, renters CASCADE ;

CREATE TABLE owners(
    id SERIAL PRIMARY KEY,
    owner_name VARCHAR(100) NOT NULL,
    contact VARCHAR(10)
); 

CREATE TABLE properties(
    id SERIAL PRIMARY KEY,
    prop_address VARCHAR(100) NOT NULL,
    img VARCHAR(255),
    price FLOAT,
    details TEXT,
    owner_id INT,
    rent_start DATE,
    rent_end DATE,
    FOREIGN KEY(owner_id) REFERENCES owners(id)
); 


CREATE TABLE renters(
    id SERIAL PRIMARY KEY,
    renter_name VARCHAR(100) NOT NULL,
    property_id INT,
    FOREIGN KEY(property_id) REFERENCES properties(id)

); 


INSERT INTO owners (owner_name, contact)
    VALUES 
        ('owner1', '0123456789'),
        ('owner2', '0129454545');


INSERT INTO properties (prop_address, img, price, details, owner_id)
    VALUES 
        ('Gaza', 'https://divisare-res.cloudinary.com/images/dpr_3.0,f_auto,q_auto,w_200/v1643027887/vhloy2ygtvanyhyjgsig/baseli-candrian-federico-farinatti-apartment-house-urdorf.jpg0123456789',
        1500, '2 floors', 1),
        ('Gaza', 'https://divisare-res.cloudinary.com/images/dpr_3.0,f_auto,q_auto,w_200/v1643027887/vhloy2ygtvanyhyjgsig/baseli-candrian-federico-farinatti-apartment-house-urdorf.jpg0123456789',
        1600, '2 floors', 2);
        

INSERT INTO renters (renter_name, property_id)
    VALUES 
        ('renter1', 1),
        ('renter2', 2);


COMMIT;