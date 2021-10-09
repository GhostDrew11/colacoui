# colacoui

Prototype user interface for the colaco vending machine.

# Libraries used
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Bootstrap and Material UI were also used to build this interface

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Setup 
The colacoapi is a rest API, which should be build locally and deployed at "http://127.0.0.1:8000/api/v1/"
Django allowing administrators to run task on rest API, CRUD functionalities for users, sodas and orders are
should be available after being built locally at "http://127.0.0.1:8000/api/v1/users/", 
"http://127.0.0.1:8000/api/v1/sodas/", "http://127.0.0.1:8000/api/v1/orders/". These api routes , can be tested
using Postman while teh server is up and running.

### API Routes 

The initial fect of available soda is made through a useEffect inside App.js , while the creation(insertion) of
order was enable through the API call of the method InsertOrder from the class APIService.js later on called inside OrderForm.js

### To import the database

The database I used for this project is "colacobackup.sql"
For windows with pgAdmin 4:

You create a new database with the name you want 
you right click on that database 
then click on the option restore
a new window will show up you'll go for 
Filename to seth the path another window named "Select File" will show up
then you will select your backup sql file inside the directory you saved it 
then click select then restore. It will perfectly import data from the backup

For MacOS with pgAdimn it will be the same process 
Create a new database then run the command

psql nameofyournewdatabase < colacobackup.sql

# Days Breakdown

Friday 10/01: Breakdow of the project and choose to use Django for the backend and react for the frontend
              MVP of the UI was drawn on sheets of paper

Saturday 10/02: Followed the python and django tutorial step by step from the youtube video
                https://www.youtube.com/watch?v=jBzwzrDvZ18

Monday 10/04: Completed the django and python tutorial. It took me three days, it was really long. Gave me a 
              blurry understanfing of the django framework.
              Started the django and react tutorial step by step from the youtube video 
              https://www.youtube.com/watch?v=VBqJ0-imSMU&t=24072s

Tuesday 10/05: Completed approximately 3 hours of the tutorial and started the REST API of the project 
               added Soda model, views and serializers, and changed the database to postgreSQL.

Wednesday 10/06: Shifted focus on multiple tutorials on how to dockerise a REST API built out of Django and
                 postgreSQL. Was a waste of time for this project, most of the tutorials wre Mac OS oriented 
                 couldn't really grasp the concept. Ended up on a mental break down. Later in the day bounced 
                 back and completed the django and react tutorial. Started a rough react frontend prototype

Thursday 10/07: Kept working on the prototype and was able to fetch the dat from the backend and display them.
                Added the Order model and crud orders for the backend and was able to implement the ordering process.

# What will have been done if I add more time?

-Dockerise my application to ease the deployment
-Drawn my MVP not on paper but with either Adobe XD or Figma, I was way too focus on learning Django
-Learned more about django to be actually able to implement constraints and build an administrator side
also through react not only the one provided by django rest framework
-Actually implement my MVP because this prototype is way far from my MVP, I was mostly focused on the API and 
frontend connection and implementation of a simple ordering
-Not only follow documentation and Youtube videos but also suscribe for Udemi courses using the same tech stack 
to be more productive
-Add Images for the different soda, didn't want to insert some in the database at first went for putting
image as background on cards but it didn't work as planned. So will jump for images inside the database
since they are easy to manage in django and through props.
-Read and practice more about django before actually working on the main project because it's an amazing framework. I'm glad I discovered it throughout this project.
-Add multiple payment types (bill and coins) and correctly implement card payment
-Add constraints on date for card which is only 'MM/YY' make sure or separate it in month and year integer fields 
which is smarter
-Make sure the product name entered is always one of those availables
-Make the web application responsive

