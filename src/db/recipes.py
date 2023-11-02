import sqlite3


class RecipesDB:
    def __init__(self, db_name: str):
        self.db_name = db_name

    def get_recipes_from_ingredients(self, ingredients: list[str]):
        conditions = ' AND '.join([f"Cleaned_Ingredients LIKE '%{ingredient}%'" for ingredient in ingredients])
        conn = sqlite3.connect(self.db_name)
        cursor = conn.cursor()
        query = f"""
                    SELECT Title
                    FROM Recipes
                    WHERE {conditions};
                 """
        cursor.execute(query)
        result = cursor.fetchall()

        print(result)


RD = RecipesDB('recipes.db')

RD.get_recipes_from_ingredients("chicken")



