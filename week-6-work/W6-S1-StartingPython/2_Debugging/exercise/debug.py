def greet(name):
    # Fixed the missing space between "Hello" and the name
    print("Hello " + name)  # Corrected the indentation and added the space

def count_to_n(n):
    i = 0
    while i < n:  
        print(i)
        i += 1  # Added increment to avoid infinite loop

def calculate_average(numbers):
    if len(numbers) == 0:
        return 0  # Return 0 or a suitable value when list is empty to prevent division by zero
    total = sum(numbers)
    return total / len(numbers)

# --- Main Execution ---
greet("Alice")  # Fixed: Alice should be in quotes as it's a string

count_to_n(5)  # This will now print numbers from 0 to 4 correctly

# Edge case with an empty list
average = calculate_average([])  # This will now return 0 instead of causing an error
print("Average:", average)