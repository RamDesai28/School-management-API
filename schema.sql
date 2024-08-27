-- schema.sql
CREATE DATABASE schools;

USE schools;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 8) NOT NULL,
    longitude DECIMAL(11, 8) NOT NULL
);

INSERT INTO schools (name, address, latitude, longitude) VALUES
('School A', '123 Main St', 12.9716, 77.5946),
('School B', '456 Side St', 12.9710, 77.5950),
('School C', '789 Another St', 12.9725, 77.5930);
