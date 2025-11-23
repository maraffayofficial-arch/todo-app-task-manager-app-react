import React from 'react'

const About = () => {
  return (
    <div>
      <>
      <h2>About</h2>
      <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo provident maiores, eveniet doloribus esse harum!
      </p>
      </>
    </div>
  )
}

export default About


//   --  a) Write the SQL queries to create the tables. Use appropriate data types for 
// --    each attribute and choose appropriate primary and foreign keys. 

// -- Create the database
// CREATE DATABASE VideoRental;
// GO

// -- Use the database
// USE VideoRental;
// GO

// -- ============================================
// -- PART A: CREATE TABLES
// -- ============================================

// -- Table 1: Customers
// CREATE TABLE Customers (
//     CustomerID INT PRIMARY KEY,
//     FName VARCHAR(50) NOT NULL,
//     LName VARCHAR(50) NOT NULL,
//     Street VARCHAR(100),
//     Town VARCHAR(50),
//     State VARCHAR(10),
//     Postcode VARCHAR(10),
//     Balance DECIMAL(10, 2)
// );
// GO

// -- Table 2: Charge
// CREATE TABLE Charge (
//     ChargeCode INT PRIMARY KEY,
//     Description VARCHAR(50),
//     RentFee DECIMAL(10, 2),
//     LateFee DECIMAL(10, 2)
// );
// GO

// -- Table 3: Videos
// CREATE TABLE Videos (
//     SSNV VARCHAR(20) PRIMARY KEY,
//     Name VARCHAR(200) NOT NULL,
//     VideoMaker VARCHAR(100),
//     Year INT,
//     Cost DECIMAL(10, 2),
//     ChargeCode INT,
//     FOREIGN KEY (ChargeCode) REFERENCES Charge(ChargeCode)
// );
// GO

// -- Table 4: VideoCopy
// CREATE TABLE VideoCopy (
//     VideoCopy_Num INT PRIMARY KEY,
//     VideoCopy_ArrivalDate DATE,
//     SSNV VARCHAR(20),
//     FOREIGN KEY (SSNV) REFERENCES Videos(SSNV)
// );
// GO

// -- Table 5: Rent
// CREATE TABLE Rent (
//     RentID INT PRIMARY KEY,
//     RentDate DATE NOT NULL,
//     CustomerID INT,
//     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
// );
// GO

// -- Table 6: RentDetails
// CREATE TABLE RentDetails (
//     RentID INT,
//     VideoCopy INT,
//     RentFee DECIMAL(10, 2),
//     DueDate DATE,
//     ReturnDate DATE,
//     LateFee DECIMAL(10, 2),
//     PRIMARY KEY (RentID, VideoCopy),
//     FOREIGN KEY (RentID) REFERENCES Rent(RentID),
//     FOREIGN KEY (VideoCopy) REFERENCES VideoCopy(VideoCopy_Num)
// );
// GO

// PRINT 'All tables created successfully!';
// GO

//                            -- (a) ended

// -- b) Write the Insert query to enter the  sample data into the tables created in 
//     --Part a. The sample data is provided.

//     -- ============================================
// -- PART B: INSERT DATA
// -- ============================================

// USE VideoRental;
// GO

// -- Insert into Charge table
// INSERT INTO Charge (ChargeCode, Description, RentFee, LateFee)
// VALUES 
// (1, 'Standard', 5, 2),
// (2, 'New', 10, 4),
// (3, 'Discount', 2, 0.5);
// GO

// -- Insert into Customers table
// INSERT INTO Customers (CustomerID, FName, LName, Street, Town, State, Postcode, Balance)
// VALUES 
// (211, 'Rose', 'Green', '2 Alison St', 'Randwick', 'NSW', '2030', 100),
// (212, 'Stacey', 'Knell', '50 Garden St', 'Revesby', 'NSW', '2140', 50),
// (213, 'India', 'Elmore', '44 Main St', 'Botany', 'NSW', '2332', 15),
// (214, 'Cameron', 'Rosere', '73 Everlast St', 'Geelong', 'VIC', '3754', 0),
// (215, 'John', 'Parker', '43 Cook Ave', 'Parkwood', 'NSW', '2543', 12),
// (216, 'Robert', 'Swarm', '71 Vase St', 'Revesbay', 'NSW', '2140', 75),
// (217, 'Louis', 'Opral', '34 East Drive', 'Corio', 'VIC', '3125', 33),
// (218, 'Grace', 'Knen', '9 Max Avenue', 'Highton', 'VIC', '3453', 22),
// (219, 'Wendy', 'David', '3 Elmore ST', 'Botany', 'NSW', '2332', 25),
// (220, 'Kim', 'Green', '87 Kent St', 'Randwick', 'NSW', '2030', 34);
// GO

// -- Insert into Videos table
// INSERT INTO Videos (SSNV, Name, VideoMaker, Year, Cost, ChargeCode)
// VALUES 
// ('1337627909', 'Oracle Implementation Video', 'Steven Charles', 2018, 116, 1),
// ('0241258766', 'Learning from Data Video', 'Daniel Whitener', 2020, 17, 1),
// ('1292168622', 'The Practice of Computing Using Python Video', 'Richard Murphy', 2016, 95, 2),
// ('0137081073', 'C++ Programming Video', 'Robert Adam', 2011, 49, 3),
// ('9780134085', 'Security in Computing Video', 'John petter', 2015, 100, 1);
// GO

// -- Insert into VideoCopy table
// INSERT INTO VideoCopy (VideoCopy_Num, VideoCopy_ArrivalDate, SSNV)
// VALUES 
// (4325, '2019-10-01', '1337627909'),
// (4326, '2019-10-01', '1337627909'),
// (4327, '2019-10-01', '1337627909'),
// (4328, '2019-12-02', '0241258766'),
// (4329, '2019-12-02', '0241258766'),
// (5432, '2019-04-16', '1292168622'),
// (5433, '2019-04-16', '1292168622'),
// (5434, '2019-04-16', '1292168622'),
// (5435, '2019-04-16', '1292168622'),
// (6634, '2019-06-28', '0137081073'),
// (6635, '2019-06-28', '0137081073'),
// (6636, '2019-06-28', '9780134085'),
// (6637, '2019-06-28', '9780134085');
// GO

// -- Insert into Rent table
// INSERT INTO Rent (RentID, RentDate, CustomerID)
// VALUES 
// (7001, '2020-05-01', 213),
// (7002, '2020-07-02', 219),
// (7003, '2021-02-01', 212),
// (7004, '2021-02-01', 213),
// (7005, '2021-02-01', 220);
// GO

// -- Insert into RentDetails table
// INSERT INTO RentDetails (RentID, VideoCopy, RentFee, DueDate, ReturnDate, LateFee)
// VALUES 
// (7001, 4325, 5, '2020-05-30', '2020-05-29', NULL),
// (7001, 5432, 7, '2020-05-30', '2020-06-28', NULL),
// (7002, 4329, 4.5, '2020-09-02', '2020-08-28', NULL),
// (7003, 4327, 3.5, '2021-04-01', '2021-03-29', NULL),
// (7003, 6637, 10, '2021-04-01', '2021-03-29', NULL),
// (7003, 6634, 6, '2021-04-01', '2021-04-01', NULL),
// (7004, 4326, 5, '2021-04-01', '2021-04-01', NULL),
// (7004, 4328, 12, '2021-04-01', NULL, NULL),
// (7005, 5433, 3.5, '2021-05-07', NULL, NULL),
// (7004, 6635, 10, '2021-04-01', '2021-04-01', NULL);
// GO

// PRINT 'All data inserted successfully!';
// GO


// USE VideoRental;
// GO

// SELECT 
//     TABLE_SCHEMA AS SchemaName,
//     TABLE_NAME AS TableName
// FROM INFORMATION_SCHEMA.TABLES
// WHERE TABLE_TYPE = 'BASE TABLE'
// ORDER BY TABLE_SCHEMA, TABLE_NAME;



// USE VideoRental
// GO

// SELECT * FROM Customers
// GO

// SELECT * FROM Charge
// GO

// SELECT * FROM Rent
// GO

// SELECT * FROM RentDetails
// GO

// SELECT * FROM VideoCopy
// GO

// SELECT * FROM Videos
// GO




//                                    -- PART C: SELECT QUERIES
// USE VideoRental;
// GO

// -- Query i: List all videos where the cost of the video is between 50 and 75
// PRINT 'Query i: Videos with cost between 50 and 75';
// SELECT *
// FROM Videos
// WHERE Cost BETWEEN 50 AND 75;
// GO

// -- Query ii: List the details of all customers' last names that begin with the letters 'Kne'
// PRINT 'Query ii: Customers with last name beginning with Kne';
// SELECT *
// FROM Customers
// WHERE LName LIKE 'Kne%';
// GO

// -- Query iii: List customer id, first name, last name, state and total number of videos borrowed
// PRINT 'Query iii: Customer details with total videos borrowed';
// SELECT 
//     c.CustomerID,
//     c.FName,
//     c.LName,
//     c.State,
//     COUNT(rd.VideoCopy) AS TotalVideosBorrowed
// FROM Customers c
// LEFT JOIN Rent r ON c.CustomerID = r.CustomerID
// LEFT JOIN RentDetails rd ON r.RentID = rd.RentID
// GROUP BY c.CustomerID, c.FName, c.LName, c.State
// ORDER BY c.CustomerID;
// GO

// -- Query iv: List each customer's first name, last name, the rented video name and due date
// PRINT 'Query iv: Customer rentals with video names and due dates';
// SELECT 
//     c.FName,
//     c.LName,
//     v.Name AS VideoName,
//     rd.DueDate
// FROM Customers c
// INNER JOIN Rent r ON c.CustomerID = r.CustomerID
// INNER JOIN RentDetails rd ON r.RentID = rd.RentID
// INNER JOIN VideoCopy vc ON rd.VideoCopy = vc.VideoCopy_Num
// INNER JOIN Videos v ON vc.SSNV = v.SSNV
// ORDER BY c.LName, c.FName;
// GO

// -- Query v: Create a view "BorrowDetails" and display the number of videos each customer has
// PRINT 'Query v: Creating view BorrowDetails';
// GO

// -- Create the view (must be in its own batch)
// CREATE VIEW BorrowDetails AS
// SELECT 
//     c.CustomerID,
//     c.FName,
//     c.LName,
//     v.Name AS VideoName,
//     rd.DueDate
// FROM Customers c
// INNER JOIN Rent r ON c.CustomerID = r.CustomerID
// INNER JOIN RentDetails rd ON r.RentID = rd.RentID
// INNER JOIN VideoCopy vc ON rd.VideoCopy = vc.VideoCopy_Num
// INNER JOIN Videos v ON vc.SSNV = v.SSNV;
// GO

// -- Now query from the view to display number of videos each customer has
// PRINT 'Displaying number of videos per customer from BorrowDetails view';
// SELECT 
//     FName,
//     LName,
//     COUNT(*) AS NumberOfVideos
// FROM BorrowDetails
// GROUP BY CustomerID, FName, LName
// ORDER BY NumberOfVideos DESC, LName;
// GO

// PRINT 'All queries completed successfully!';
// GO