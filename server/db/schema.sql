-- DROP DATABASE
DROP DATABASE IF EXISTS hero_db;

-- CREATE DATABASE
CREATE DATABASE hero_db;

-- USE DATABASE
USE hero_db;

-- CREATE TABLES
CREATE TABLE users{
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,

}
CREATE TABLE ranges{
    id INT AUTO_INCREMENT PRIMARY KEY,
    range_name VARCHAR(50) NOT NULL,
}
CREATE TABLE roles{
    id INT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL,
}

CREATE TABLE heroes{
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (hero_id) REFERENCES hero(id),
}
CREATE TABLE hero{
    id INT AUTO_INCREMENT PRIMARY KEY,
    hero_name VARCHAR(50) NOT NULL,
    hero_desc VARCHAR(350) NOT NULL,
    hero_powerlevel INTEGER NOT NULL,
    FOREIGN KEY (hero_range) REFERENCES ranges(id) NOT NULL,
    FOREIGN KEY (hero_role) REFERENCES roles(id) NOT NULL,
    FOREIGN KEY (hero_power_id) REFERENCES powers(id),
    FOREIGN KEY (hero_gadget_id) REFERENCES gadgets(id),
    FOREIGN KEY (hero_origin_id) REFERENCES origins(id),
}
/*CREATE TABLE gadgetHero{
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (hero_id) REFERENCES heroes(id),
    FOREIGN KEY (gadget_id) REFERENCES gadgets(id),
}
CREATE TABLE powerHero{
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (hero_id) REFERENCES heroes(id),
    FOREIGN KEY (power_id) REFERENCES powers(id),
}*/

CREATE TABLE powers{
    id INT AUTO_INCREMENT PRIMARY KEY,
    power_name VARCHAR(50) NOT NULL,
    power_desc VARCHAR(350) NOT NULL,
    power_powerlevel INTEGER NOT NULL,
    power_range INTEGER NOT NULL,
    power_role INTEGER NOT NULL,
}

CREATE TABLE gadgets{
    id INT AUTO_INCREMENT PRIMARY KEY,
    gadget_name VARCHAR(50) NOT NULL,
    gadget_desc VARCHAR(350) NOT NULL,
    gadget_powerlevel INTEGER NOT NULL, 
    gadget_range INTEGER NOT NULL,
    gadget_role INTEGER NOT NULL,

}

CREATE TABLE origins{
    id INT AUTO_INCREMENT PRIMARY KEY,
    origin_name VARCHAR(50) NOT NULL,
    origin_desc VARCHAR(350) NOT NULL,
}

CREATE TABLE tags{
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(50) NOT NULL,
    tag_desc VARCHAR(350) NOT NULL,
}

CREATE TABLE powerTags{
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (power_id) REFERENCES powers(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id),
}

CREATE TABLE gadgetTags{
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY (gadget_id) REFERENCES gadgets(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id),
}

