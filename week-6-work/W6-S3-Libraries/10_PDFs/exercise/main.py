import fitz  # PyMuPDF for reading PDFs
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


def read_pdf(pdf_path):
    """Reads text from a PDF file."""
    try:
        doc = fitz.open(pdf_path)
        text = ""
        for page in doc:
            text += page.get_text() + "\n"
        return text
    except Exception as e:
        return f"Error reading PDF: {e}"


def read_text_file(txt_path):
    """Reads text from a .txt file."""
    try:
        with open(txt_path, "r", encoding="utf-8") as file:
            return file.read()
    except Exception as e:
        return f"Error reading text file: {e}"


def text_to_pdf(text, output_pdf_path):
    """Converts a text file to a PDF."""
    try:
        c = canvas.Canvas(output_pdf_path, pagesize=letter)
        c.setFont("Helvetica", 12)

        # Define margins and line spacing
        width, height = letter
        x, y = 50, height - 50  # Start position

        for line in text.split("\n"):
            if y < 50:  # Create new page if at the bottom
                c.showPage()
                c.setFont("Helvetica", 12)
                y = height - 50
            c.drawString(x, y, line)
            y -= 15  # Line spacing

        c.save()
        print(f"PDF saved successfully: {output_pdf_path}")
    except Exception as e:
        print(f"Error creating PDF: {e}")


# Example Usage
pdf_path = "example.pdf"  # Replace with your PDF file path
txt_path = "example.txt"  # Replace with your text file path
output_pdf = "output.pdf"  # Name of the generated PDF

# Read a PDF
pdf_text = read_pdf(pdf_path)
print("PDF Content:\n", pdf_text)

# Read a Text File
txt_content = read_text_file(txt_path)
print("\nText File Content:\n", txt_content)

# Convert Text to PDF
text_to_pdf(txt_content, output_pdf)

# Add confirmation message after reading PDF
pdf_text = read_pdf(pdf_path)
if "Error" not in pdf_text:
    print("PDF read successfully!\n", pdf_text)
else:
    print(pdf_text)

# Loop for multiple conversions
while True:
    txt_path = input("Enter a text file path to convert to PDF (or 'q' to quit): ")
    if txt_path.lower() == 'q':
        break
    output_pdf = input("Enter output PDF name: ")
    text_to_pdf(read_text_file(txt_path), output_pdf)