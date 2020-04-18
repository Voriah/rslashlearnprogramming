Your task is to create a Trick Or Treating Application

## First we will start by structuring our DB
1. Create a database named `halloween_db`
2. Create a `candy` table. Candy should have columns for the following data:
  1. id
  2. name
  3. calories
  4. if it's a full size candy bar
3. Create a `house` table. Houses should have columns for the following data:
  1. id
  2. address
  3. family (lastname)
  4. id of candy
4. Create a `trickOrTreater` table. Trick-Or-TReaters should have columns for the following data:
  1. id
  2. name
  3. id of house
  4. costume
5. Seed the database. We need to have 10 differenty candies, houses, and Trick-Or-Treaters. Each Trick-Or-Treater should belong to a different house, and each house should hand out a different candy.
6. Write a MySQL Query to return one Trick-Or-Treater, excluding their id & id of house, but including their house's address and family name (HINT: remember JOINs?).
7. Write a MySQL Query to return one house, excluding the id & id of candy, but including the candy's name and whether it is a full size candy bar (HINT: JOINs as well).
