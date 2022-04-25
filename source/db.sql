CREATE TABLE users (userID INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(40),
password VARCHAR(255)
);

CREATE TABLE players (playerID INT PRIMARY KEY AUTO_INCREMENT,
playerName VARCHAR(50),
dob DATE,
userID INT,

FOREIGN KEY(userID) REFERENCES users(userID)
);

CREATE TABLE additionalPlayer (playerID VARCHAR(20)PRIMARY KEY,
playerName VARCHAR(50),
FOREIGN KEY(playerID) REFERENCES Player(playerID),
FOREIGN KEY(playerName) REFERENCES Player(playerName)
);

CREATE TABLE staff (staffID VARCHAR(20)PRIMARY KEY,
email VARCHAR(20),
password VARCHAR(20),
staffName VARCHAR(40),
phone number(10)
);

CREATE TABLE booking (bookingID VARCHAR(20)PRIMARY key,
bookingDate DATE,
bookingTime VARCHAR(20),
court VARCHAR(20),
additionalPlayerID VARCHAR(20),
playerID VARCHAR(20), 
FOREIGN KEY(additionalPlayerID) REFERENCES AdditionalPlayer(playerID),
FOREIGN KEY(playerID) REFERENCES Player(playerID)
);

INSERT INTO players(playerName, email, password, dob)
VALUES ('Othman Alhadiri','othman@gmail.com', password('pwd123'), '1996-02-04');

INSERT INTO players(playerName, email, password, dob)
VALUES ('Omar Eldamiry','omar@gmail.com', password('pwd321'), '1999-09-19');

INSERT INTO staff(email, password, staffName, phone)
VALUES ('staff@gmail.com', password('pwdabc'), 'Test Staff', 123456789);