mysql> CREATE DATABASE bootcamp;
ERROR 1007 (HY000): Can't create database 'bootcamp'; database exists
mysql> USE bootcamp;
Database changed
mysql> CREATE TABLE students (
    ->     student_name VARCHAR(30),
    ->     github_username VARCHAR(30),
    ->     favourite_technology VARCHAR(30)
    -> );
ERROR 1050 (42S01): Table 'students' already exists
mysql> INSERT INTO students (student_name, github_username, favourite_technology)
    -> VALUES
    ->   ('Alice Johnson', 'alice123', 'react'),
    ->   ('Bob Smith', 'bobdev', 'python'),
    ->   ('Charlie Lee', 'charliecodes', 'react'),
    ->   ('Dana Wright', 'danadesigns', 'html/css');
Query OK, 4 rows affected (0.044 sec)
Records: 4  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM students;
+---------------+-----------------+----------------------+
| student_name  | github_username | favourite_technology |
+---------------+-----------------+----------------------+
| Alice Johnson | alice123        | react                |
| Bob Smith     | bobdev          | python               |
| Charlie Lee   | charliecodes    | react                |
| Dana Wright   | danadesigns     | html/css             |
| Alice Johnson | alice123        | react                |
| Bob Smith     | bobdev          | python               |
| Charlie Lee   | charliecodes    | react                |
| Dana Wright   | danadesigns     | html/css             |
+---------------+-----------------+----------------------+
8 rows in set (0.009 sec)

mysql> no tee
    -> notee
    -> notee;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'no tee
notee
notee' at line 1
mysql> notee;
