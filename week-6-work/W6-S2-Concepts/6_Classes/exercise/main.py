# Base class Person
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        # This is the base introduction method
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")

    def speak(self):
        # A generic greeting
        print(f"Hello! I am {self.name}.")

# Derived class Student that inherits from Person
class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)  # Initialize the parent class (Person)
        self.student_id = student_id

    def introduce(self):
        super().introduce()  # Call the parent (Person's) introduce method
        print(f"My student ID is {self.student_id}.")

    def speak(self):
        # Override to add student-specific greeting
        print(f"Hi, I'm {self.name}, a student at the school.")

# Derived class Manager that inherits from Person
class Manager(Person):
    def __init__(self, name, age, department, employee_id):
        super().__init__(name, age)  # Initialize the parent class (Person)
        self.department = department
        self.employee_id = employee_id

    def introduce(self):
        super().introduce()  # Call the parent (Person's) introduce method
        print(f"My employee ID is {self.employee_id}, and I work in the {self.department} department.")

    def speak(self):
        # Override to add manager-specific greeting
        print(f"Hello, I'm {self.name}, the manager of the {self.department} department.")

# Creating instances of each class
if __name__ == "__main__":
    # Instances for Person, Student, Manager
    person1 = Person("Alice", 25)
    student1 = Student("Bob", 30, "1234")
    manager1 = Manager("Charlie", 35, "HR", "5678")
    
    # Additional Person for testing
    person2 = Person("David", 40)
    person3 = Person("Eve", 45)

    # Creating a list of Person objects (including instances of Student and Manager)
    staff = [person1, student1, manager1, person2, person3]

    # Call introduce and speak for each person in the staff list
    print("\nIntroductions:")
    for person in staff:
        person.introduce()  # Call introduce() method for each object

    print("\nSpeaking:")
    for person in staff:
        person.speak()  # Call speak() method for each object