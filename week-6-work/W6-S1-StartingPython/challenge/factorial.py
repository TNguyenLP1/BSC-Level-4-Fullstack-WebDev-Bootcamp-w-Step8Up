# Factorial Calculator in Python

# 1. Define a function to calculate the factorial of a number
def factorial(n):
    # Edge case: factorial of 0 is 1
    if n == 0:
        return 1
    # Otherwise, calculate factorial using a loop
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

# 2. Function to handle user input and calculate the factorial
def calculate_factorial():
    while True:
        user_input = input("Enter a number to calculate its factorial (or type 'quit' to exit): ")

        # Check if the user wants to quit
        if user_input.lower() == "quit":
            print("Goodbye!")
            break

        # Check for invalid input
        if not user_input.isdigit():
            print("Invalid input. Please enter a positive integer.")
            continue

        # Convert the input to an integer
        num = int(user_input)
        
        # Edge case for negative numbers
        if num < 0:
            print("Factorial is not defined for negative numbers. Please enter a positive integer.")
            continue

        # Calculate and print the factorial
        print(f"The factorial of {num} is {factorial(num)}")

# 3. Call the function to start the program
calculate_factorial()