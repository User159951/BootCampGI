import requests, random, psycopg2

def get_countries():

    HOSTNAME = 'localhost'
    USERNAME = 'admin'
    PASSWORD = 'admin'
    DATABASE = 'countries'
    PORT = "5432"

    connection = psycopg2.connect(
        host=HOSTNAME,
        user=USERNAME,
        password=PASSWORD,
        dbname=DATABASE,
        port=PORT
    )
    cursor = connection.cursor()

    # Create a table to store country data
    query = """CREATE TABLE IF NOT EXISTS countries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        capital VARCHAR(255),
        flag VARCHAR(255),
        subregion VARCHAR(255), 
        population INT)"""
    cursor.execute(query)
    connection.commit()

    url = 'https://restcountries.com/v3.1/all'
    response = requests.get(url)

    if response.status_code == 200:
        countries = response.json()
        for country in range(10):
            random_country = random.choice(countries)
            name = random_country['name']['common']
            capital = random_country.get('capital', ['No capital'])[0]
            population = random_country.get('population', 'No population')
            area = random_country.get('area', 'No area')
            flag = random_country.get('flags', {}).get('png', 'No flag')
            subregion = random_country.get('subregion', 'No subregion')
            print(f"Country: {name}, Capital: {capital}, flag {flag}, Population: {population}, Area: {area}")
            query = """INSERT INTO countries (name, capital, flag, subregion, population)
                VALUES (%s, %s, %s, %s, %s)"""
            cursor.execute(query, ( name, capital, flag, subregion, population))

    connection.commit()
    connection.close()
get_countries()