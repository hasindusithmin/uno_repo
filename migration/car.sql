-- brand,  model,  condition  (brand  new/registered/unregistered),  price, description, image


DROP TABLE IF EXISTS car;
CREATE TABLE car (car_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,brand VARCHAR(255),model VARCHAR(255),conditions VARCHAR(255),price VARCHAR(255),descriptions VARCHAR(1000),images MEDIUMBLOB,image_type VARCHAR(255));
