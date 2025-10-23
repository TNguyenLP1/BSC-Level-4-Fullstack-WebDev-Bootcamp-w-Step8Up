import requests

def main():
    while True:
        country_name = input("Enter a country name: ").strip()
        if not country_name:
            print("Invalid input. Please enter a valid country name.")
            continue

        url = f"https://restcountries.com/v3.1/name/{country_name}"
        try:
            response = requests.get(url)
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list) and len(data) > 0:
                    country = data[0]
                    common_name = country.get("name", {}).get("common", "Unknown")
                    population = country.get("population", "Unknown")
                    print(f"Country: {common_name}")
                    print(f"Population: {population:,}")
                else:
                    print("Country not found. Please check the spelling and try again.")
            else:
                print("Country not found. Please check the spelling and try again.")
        except requests.RequestException as e:
            print(f"Error fetching data: {e}")

        # Ask user if they want to look up another country
        again = input("Do you want to look up another country? (y/n): ").strip().lower()
        if again != 'y':
            print("Goodbye!")
            break


if __name__ == "__main__":
    main()