import numpy as np

print("Welcome to NumPy Basics! Let's explore some common use cases.\n")

# 1. Creating an Array
print("Step 1: Creating an Array")
numbers = np.array([5, 10, 15, 20, 25])
print("Array:", numbers)

# TODO: Try changing the numbers in the array above and re-run the script!
# Example: Changed to a new list
numbers = np.array([3, 6, 9, 12, 15])
print("Changed Array:", numbers)
print("\n")

# 2. Basic Math Operations
print("Step 2: Basic Math Operations")
print("Sum:", np.sum(numbers))
print("Mean (Average):", np.mean(numbers))
print("Maximum Value:", np.max(numbers))
print("Minimum Value:", np.min(numbers))

# TODO: Can you create another array and find its sum and mean?
new_numbers = np.array([2, 4, 6, 8, 10])
print("New Array:", new_numbers)
print("Sum of new array:", np.sum(new_numbers))
print("Mean of new array:", np.mean(new_numbers))
print("\n")

# 3. Generating Random Numbers
print("Step 3: Generating Random Numbers")
random_numbers = np.random.randint(1, 50, size=5)  # 5 random numbers between 1 and 50
print("Random Numbers:", random_numbers)

# TODO: Try changing the range (e.g., 1-100) and size (e.g., 10) of the random numbers.
random_numbers_large = np.random.randint(1, 100, size=10)
print("Random Numbers (1-100, size 10):", random_numbers_large)
print("\n")

# 4. Working with 2D Arrays (Matrices)
print("Step 4: Working with 2D Arrays")
matrix = np.array([[1, 2], [3, 4]])
print("Matrix:\n", matrix)
print("Transpose (Flip rows and columns):\n", matrix.T)

# Exercise: Create a 3x3 matrix and find its transpose!
matrix_3x3 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("3x3 Matrix:\n", matrix_3x3)
print("Transpose of 3x3 Matrix:\n", matrix_3x3.T)
print("\n")

# 5. Sorting an Array
print("Step 5: Sorting an Array")
unsorted_array = np.array([12, 5, 18, 7, 3])
print("Unsorted:", unsorted_array)
print("Sorted:", np.sort(unsorted_array))

# TODO: Change the numbers in `unsorted_array` and see how sorting works!
unsorted_array = np.array([50, 20, 15, 100, 5])
print("Changed Unsorted Array:", unsorted_array)
print("Sorted Changed Array:", np.sort(unsorted_array))
print("\n")

# 6. Challenge: Find Even Numbers in an Array
print("Step 6: Find Even Numbers in an Array")
arr = np.array([4, 9, 12, 15, 20, 25, 30])
even_numbers = arr[arr % 2 == 0]  # Filtering even numbers
print("Even Numbers:", even_numbers)

# TODO: Try adding more numbers and find the even ones!
arr_extended = np.array([4, 9, 12, 15, 20, 25, 30, 32, 45, 50])
even_numbers_extended = arr_extended[arr_extended % 2 == 0]
print("Extended Array:", arr_extended)
print("Even Numbers in Extended Array:", even_numbers_extended)
print("\n")

print("Great job! Keep experimenting with NumPy!")
