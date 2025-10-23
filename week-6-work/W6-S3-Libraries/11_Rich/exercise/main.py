from InquirerPy import inquirer
from rich.console import Console
from rich.table import Table
from rich.progress import Progress
import time

console = Console()

# Valid colors
valid_colors = ["red", "green", "blue", "yellow", "magenta", "cyan", "white"]

# Get user input
name = inquirer.text(message="What is your name?").execute()
color = inquirer.text(
    message="What is your favorite color?",
    validate=lambda result: result.lower() in valid_colors or "Choose a valid color"
).execute().lower()

# Display formatted welcome message
console.print(f"Hello, [bold {color}]{name}[/bold {color}]!", style=color)

# Create a table
table = Table(title="Sample Data", title_style="bold magenta")
table.add_column("ID", justify="right", style="cyan", no_wrap=True)
table.add_column("Name", style="magenta")
table.add_column("Score", justify="right", style="green")

table.add_row("1", "Alice", "85")
table.add_row("2", "Bob", "92")
table.add_row("3", "Charlie", "78")

console.print(table)

# Show progress bar
with Progress() as progress:
    task = progress.add_task("[cyan]Processing...", total=100)
    for i in range(0, 101, 10):
        time.sleep(0.3)
        progress.update(task, completed=i)

console.print("[bold green]Task Complete![/bold green] ✅")