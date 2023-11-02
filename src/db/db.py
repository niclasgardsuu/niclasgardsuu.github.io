import csv
import sqlite3
csv_path = "recipes.csv"
db_name = "recipes.db"


conn = sqlite3.connect(db_name)
cursor = conn.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS Recipes (
    Row TEXT,
    Title TEXT,
    Ingredients TEXT,
    Instructions TEXT,
    Image_Name TEXT,
    Cleaned_Ingredients TEXT
);
""")

with open(csv_path, 'r', encoding='utf8') as file:
    csv_reader = csv.reader(file)

    next(csv_reader, None)

    for row in csv_reader:
        cursor.execute('''
            INSERT INTO Recipes (Row,
                                 Title,
                                 Ingredients,
                                 Instructions, 
                                 Image_Name,
                                 Cleaned_Ingredients)
            VALUES (?, ?, ?, ?, ?, ?);
            ''', row)

conn.commit()
conn.close()
