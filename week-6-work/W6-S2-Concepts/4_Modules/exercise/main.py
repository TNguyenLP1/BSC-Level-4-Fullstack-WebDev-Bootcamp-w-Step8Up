def add(a, b):
    return a + b


def subtract(a, b):
    return a - b


def uppercase(text):
    return text.upper()


def lowercase(text):
    return text.lower()


def read_file(filename):
    with open(filename, "r") as file:
        return file.read()


def write_file(filename, content):
    with open(filename, "w") as file:
        file.write(content)


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
