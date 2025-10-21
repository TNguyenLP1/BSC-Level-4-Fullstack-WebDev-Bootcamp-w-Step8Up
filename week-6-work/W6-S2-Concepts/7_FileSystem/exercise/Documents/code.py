import os

# Step 1: Specify the path to the Documents folder
documents_folder = r"C:\Users\nhatm\bootcamp\BCS-Level-4-Fullstack-WebDev-Bootcamp-w-Step8Up\week-6-work\W6-S2-Concepts\7_FileSystem\exercise\Documents"

# Step 2: Initialize a list to hold the filenames
file_names = []

# Step 3: Traverse the Documents folder
for root, dirs, files in os.walk(documents_folder):
    for file in files:
        # Add the file name to the list
        file_names.append(file)

# Step 4: Write the filenames to a results.txt file
with open('results.txt', 'w') as file:
    # Write each filename on a new line
    for file_name in file_names:
        file.write(file_name + '\n')

print("The file names have been written to 'results.txt'.")