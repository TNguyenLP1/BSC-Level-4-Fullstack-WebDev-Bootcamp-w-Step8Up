# Getting Started with MySQL

## Challenge

In this exercise, you will download and install MySQL, ensuring it's set up correctly on your system. After installation, you will verify that MySQL is properly installed by testing it from the command line using the `mysql -V` command.

## Key Learnings

By completing this exercise, you will:

- Understand how to download and install MySQL on your operating system.
- Learn how to verify a MySQL installation using the command line.
- Gain familiarity with basic command-line interaction with MySQL.

## User Story

As a developer,  
I want to install and configure MySQL on my computer,  
So that I can use it as a database for my projects.

## Acceptance Criteria

- [ ] The student successfully downloads the correct version of MySQL for their operating system.
- [ ] The student completes the installation of MySQL without errors.
- [ ] The `mysql -V` command outputs the installed version of MySQL, confirming the installation is correct.
- [ ] A basic MySQL service setup is verified as part of the installation process (if required by the OS).
- [ ] Successfully login to your MySQL terminal

## Instructions

1. **Download MySQL**

   - Navigate to the [MySQL Downloads](https://dev.mysql.com/downloads/mysql/) page.
   - Choose the appropriate version for your operating system (Windows, macOS, Linux).

2. **Install MySQL**

   - Follow the official installation instructions provided on the website.
   - Ensure that you configure MySQL to start as a service (if applicable).
     **On MacOS be sure to choose ARM, 64-bit if running on an M1,2,3,4 process, x86, 64-bit if on an intel based machine (pre-2020)**

3. **Test the Installation**

   - Open your terminal or command prompt.
   - Run the command:
     ```bash
     mysql -V
     ```
   - Verify that the output shows the version of MySQL installed.

4. \*\*Login to the MySQL terminal

   - in the terminal run the command:

   ```bash

   ```

5. **Troubleshooting (if needed)**
   - If the `mysql -V` command fails, double-check your PATH environment variable and ensure MySQL was added to it during installation.
   - Consult the [MySQL Troubleshooting Guide](https://dev.mysql.com/doc/refman/8.0/en/problems.html) for additional help.
   - Here's another article that explains how to troubleshoor this error[How to Resolve the ‘MySQL Command Not Found’ error](https://www.eukhost.com/kb/how-to-resolve-the-mysql-command-not-found-problem/#:~:text=actual%20MySQL%20path.-,For%20Windows%3A,directory%20and%20save%20the%20changes.)

## Additional Resources

- [MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/)
- [Command Line Basics for MySQL](https://dev.mysql.com/doc/refman/8.0/en/mysql.html)
