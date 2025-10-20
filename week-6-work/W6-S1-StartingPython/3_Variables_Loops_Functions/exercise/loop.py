# 1. Declare Variables in Python
# Python uses dynamic typing, so you don't need to specify the type of a variable.

name = "Alice"   # String
age = 25         # Integer
height = 5.6     # Float
is_student = True  # Boolean

# JavaScript equivalent (for comparison):
# var name = "Alice";
# var age = 25;
# var height = 5.6;
# var isStudent = true;

print(name, age, height, is_student)

# 2. Use Different Data Types
# Python has lists (like JavaScript arrays) and dictionaries (like JavaScript objects).

# Python list (similar to JavaScript arrays)
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Access first element

# Python dictionary (similar to JavaScript objects)
person = {"name": "Alice", "age": 25}
print(person["name"])  # Access value by key

# 3. Implement Loops in Python
# Implementing both for loops and while loops in Python.

# Python for loop (similar to JavaScript for loop)
for i in range(5):  # range(5) generates numbers 0 to 4
    print(f"Iteration {i}")

# JavaScript equivalent:
# for (let i = 0; i < 5; i++) {
#     console.log(`Iteration ${i}`);
# }

# Python while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# JavaScript equivalent:
# let count = 0;
# while (count < 5) {
#     console.log(`Count: ${count}`);
#     count++;
# }

# 4. Create and Call Functions in Python
# Functions are defined using the `def` keyword.

# Function without parameters
def greet():
    print("Hello, World!")

# Function with parameters
def add_numbers(a, b):
    return a + b

# Calling the functions
greet()
sum_result = add_numbers(3, 7)
print(f"Sum: {sum_result}")

# JavaScript equivalent:
# function greet() {
#     console.log("Hello, World!");
# }
# function addNumbers(a, b) {
#     return a + b;
# }
# greet();
# let sumResult = addNumbers(3, 7);
# console.log(`Sum: ${sumResult}`);

# 5. Bonus Challenge - Function to Sum a List of Numbers
def sum_list(numbers):
    # Error handling for non-numeric values in the list
    if not all(isinstance(num, (int, float)) for num in numbers):
        return "Error: List must contain only numbers"
    return sum(numbers)

# Testing the sum_list function
print(sum_list([1, 2, 3, 4]))  # Should return 10
print(sum_list([1, "two", 3]))  # Should return an error message
