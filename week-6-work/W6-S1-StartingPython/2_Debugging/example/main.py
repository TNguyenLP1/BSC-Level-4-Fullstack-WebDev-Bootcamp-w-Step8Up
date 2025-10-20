# Add your code here

name = "Alice"
age = 30

print("Name:", name)
print("Age:", age)

print("Hello, {}! You are {} years old.".format(name, age))

# these are different ways to print the same thing
print(f"Hello, {name}! You are {age} years old.")
print("Hello, {}! You are {} years old.".format(name, age))
print("Hello, %s! You are %d years old." % (name, age))

# these are different data types
integer_value = 42
float_value = 3.14
string_value = "Python"
boolean_value = True

# Print the data types using f-strings
print(f"Integer: {integer_value} (Type: {type(integer_value)})")
print(f"Float: {float_value} (Type: {type(float_value)})")
print(f"String: {string_value} (Type: {type(string_value)})")
print(f"Boolean: {boolean_value} (Type: {type(boolean_value)})")

# this is how to format numbers and dates
from datetime import datetime

number = 1234567.891011
current_date = datetime.now()

print(f"Formatted Number: {number:,.2f}")
print(f"Formatted Date: {current_date:%Y-%m-%d %H:%M:%S}")
