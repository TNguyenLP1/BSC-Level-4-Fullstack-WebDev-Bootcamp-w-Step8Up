import numpy as np

print("Step 7: Advanced Matrix Operations")

# Creating a 3x3 matrix manually
matrix = np.array([[2, 3, 1], [4, 5, 6], [7, 8, 9]])
print("Matrix:\n", matrix)

# Finding the determinant
det = np.linalg.det(matrix)
print("Determinant of the matrix:", round(det, 2))

# Finding the inverse (only if the determinant is non-zero)
if det != 0:
    inverse_matrix = np.linalg.inv(matrix)
    print("Inverse of the matrix:\n", inverse_matrix)
else:
    print("Matrix is singular (no inverse exists).")

# Row-wise mean
row_mean = np.mean(matrix, axis=1)
print("Row-wise mean:", row_mean)

# Column-wise mean
col_mean = np.mean(matrix, axis=0)
print("Column-wise mean:", col_mean)

print("\n--- Exercise: Modify the matrix and observe changes ---")
# Modify the existing code to create a 3x3 matrix and perform the same operations
# For example, change the matrix values:
new_matrix = np.array([[1, 2, 3], [0, 1, 4], [5, 6, 0]])
print("New Matrix:\n", new_matrix)

new_det = np.linalg.det(new_matrix)
print("Determinant of new matrix:", round(new_det, 2))

if new_det != 0:
    new_inverse = np.linalg.inv(new_matrix)
    print("Inverse of new matrix:\n", new_inverse)
else:
    print("New matrix is singular (no inverse exists).")

new_row_mean = np.mean(new_matrix, axis=1)
print("Row-wise mean of new matrix:", new_row_mean)

new_col_mean = np.mean(new_matrix, axis=0)
print("Column-wise mean of new matrix:", new_col_mean)

print("\n--- Challenge: Generate a random 3x3 matrix and compute eigenvalues and eigenvectors ---")
# Generate a random 3x3 matrix
random_matrix = np.random.randint(1, 10, (3, 3))
print("Random Matrix:\n", random_matrix)

# Determinant
rand_det = np.linalg.det(random_matrix)
print("Determinant of random matrix:", round(rand_det, 2))

# Inverse if possible
if rand_det != 0:
    rand_inv = np.linalg.inv(random_matrix)
    print("Inverse of random matrix:\n", rand_inv)
else:
    print("Random matrix is singular (no inverse exists).")

# Row-wise and column-wise mean
rand_row_mean = np.mean(random_matrix, axis=1)
rand_col_mean = np.mean(random_matrix, axis=0)
print("Row-wise mean:", rand_row_mean)
print("Column-wise mean:", rand_col_mean)

# Eigenvalues and eigenvectors
eigenvalues, eigenvectors = np.linalg.eig(random_matrix)
print("Eigenvalues:", eigenvalues)
print("Eigenvectors:\n", eigenvectors)

print("\nGreat job! Keep exploring matrix operations with NumPy!")