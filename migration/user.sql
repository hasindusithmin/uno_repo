-- {
--     "firstname":"john",
--     "lastname":"doe",
--     "nic":552136254,
--     "city":"london",
--     "email":"johndoe@google.com",
--     "password":"1H$ksusns"
-- }
DROP TABLE IF EXISTS user;
CREATE TABLE user (user_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,firstname VARCHAR(255),lastname VARCHAR(255),nic INT(11),city VARCHAR(255),email VARCHAR(255),password VARCHAR(255));