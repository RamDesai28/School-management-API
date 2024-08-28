# School Management System API

This project is part of an internship assignment focused on developing a RESTful API for a school management system using Node.js, Express.js, and MySQL
## Features

- **Live Endpoint**- http://localhost:3000/schools/listSchools?lat=12.9716&lon=77.5946
- **Add School:** API to add a new school to the database.
- **List Schools:** API to retrieve a list of all schools, optionally sorted by proximity to a specified location.
- **Database Integration:** Utilizes MySQL for storing and retrieving school data.
- **Express.js Framework:** Built using the Express.js framework for robust and efficient API handling.
- **Error Handling:** Comprehensive error handling for various API operations.
- **Environment Configuration:** Supports environment variables for easy configuration and deployment.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/). The project requires version 14.x or higher.
- **MySQL**: Ensure MySQL is installed and running on your local machine. You can download it from [here](https://www.mysql.com/). The project requires version 8.x or higher.

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schools
PORT=3000

Database Schema
The database contains a single table named schools with the following structure:

Column	Type	Description
id	INT	Primary key, auto-incremented
name	VARCHAR(255)	Name of the school
address	VARCHAR(255)	Address of the school
latitude	DECIMAL(9,6)	Latitude coordinate
longitude	DECIMAL(9,6)	Longitude coordinate

