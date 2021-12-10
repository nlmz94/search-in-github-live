# Search In Github Live

## What does it do

This is a mobile app that finds information on github users. 

This app will not call the github api unless the user is not in its own database.

That way it makes less calls to the Github api the more it is used.

## Important Note: 
You need to add 2 .env files (sorry), one in root folder with API_URL var and one in server folder with the other two vars (DATABASE_URL and GITHUB_TOKEN).