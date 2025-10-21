# Data Structures: Lists, Tuples, Sets, Dictionaries

# Lists (Ordered, Mutable, Allows Duplicates)
fruits = ["apple", "banana", "cherry", "banana"]
print("List:", fruits)
# Lists preserve the order of elements and allow duplicates

# Tuples (Ordered, Immutable, Allows Duplicates)
coordinates = (10.0, 20.0, 30.0)
print("Tuple:", coordinates)
# Tuples are immutable, meaning the data cannot be changed once created.

# Sets (Unordered, Unique Elements Only)
unique_numbers = {1, 2, 3, 2, 1}
print("Set:", unique_numbers)
# Sets automatically remove duplicates and are unordered

# Dictionaries (Key-Value Pairs, Unordered, Fast Lookups)
person = {"name": "Alice", "age": 25, "city": "New York"}
print("Dictionary:", person)
# Dictionaries store key-value pairs and allow fast lookups by key

# Real-World Use Cases and the Best Data Structure

# 1. Storing a collection of unique usernames in a system.
# Best Fit: Set
# Reason: Sets automatically ensure all usernames are unique.
usernames = {"alice", "bob", "charlie", "alice"}
print("Unique Usernames:", usernames)

# 2. Keeping track of multiple values for a single entity, such as a student's name, age, and grades.
# Best Fit: Dictionary
# Reason: A dictionary allows storing multiple attributes for a single entity (e.g., student).
student = {"name": "John", "age": 20, "grades": [90, 85, 92]}
print("Student Info:", student)

# 3. Maintaining an ordered list of tasks for a to-do list app.
# Best Fit: List
# Reason: Lists maintain order and allow tasks to be added, removed, and repeated.
todo_list = ["Buy groceries", "Finish homework", "Call mom"]
print("To-Do List:", todo_list)

# 4. Storing geographical coordinates that should not change.
# Best Fit: Tuple
# Reason: Tuples are immutable, making them perfect for storing fixed data such as coordinates.
location = (51.5074, -0.1278)  # London coordinates (latitude, longitude)
print("Geographical Coordinates:", location)

# 5. Keeping a record of items where each item must have a unique identifier and associated information.
# Best Fit: Dictionary
# Reason: A dictionary can store items using a unique identifier as the key and associated information as values.
inventory = {
    101: {"name": "Laptop", "price": 1000},
    102: {"name": "Phone", "price": 500},
    103: {"name": "Tablet", "price": 300}
}
print("Inventory:", inventory)
