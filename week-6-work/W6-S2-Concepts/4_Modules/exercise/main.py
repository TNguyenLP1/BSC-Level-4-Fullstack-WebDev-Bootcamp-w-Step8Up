from math_utils import add, subtract
from string_utils import uppercase, lowercase
from file_utils import read_file, write_file

if __name__ == "__main__":
    # Math operations
    print("Addition:", add(5, 3))
    print("Subtraction:", subtract(10, 4))

    # String operations
    print("Uppercase:", uppercase("hello"))
    print("Lowercase:", lowercase("WORLD"))

    # File operations
    write_file("sample.txt", "Hello, world!")
    print("File content:", read_file("sample.txt"))
