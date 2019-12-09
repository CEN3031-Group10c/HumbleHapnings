********************************************************************************************************
Deployed Site: https://humble-hapnings.herokuapp.com/

API's Used:
Stripe
Firebase
Bootstrap
MongoDB
MaterializeCSS
MERN

Features
User Features

https://www.youtube.com/watch?v=dC1XvD_6lZs
This feature streamlines the first time user experience. The user arrives on a stylish landing page and can easily register for a user or church leader account and log in.



Admin Features
https://www.youtube.com/watch?v=whvSdjc3F1o
Church leader and admin account approvals. The admin(s) can approve users’ applications to become church leaders or reject them. The admin(s) can also see basic information about all users and the total number of users.

Admin features dashboard

Church leader features dashboard

Church Creation with Image Uploading:
https://youtu.be/k8BhohpOe6E
This feature allows for church creation with image uploading and then shows the church displayed in the church directory

Event Creation and Stripe payment:
https://youtu.be/mGvi2tRKkUM 
This feature allows for event creation through the Stripe API. A user can input the event’s information and attach tags to the event. A user has to pay before he or she can post his or her event to the event page.


Events Page: Mapping the DB Events 
https://www.youtube.com/watch?v=3uYXMnBFFwA&feature=youtu.be
This page maps each of the events currently in the DB and their tags, description, location, name, host church, etc. as long of a string as each may be. On the right column, the user can filter through each of the attributes of the events and pay to create a new event, which will instantly appear in the Events page, once paid for and submitted.


Database can be updated through the login information provided to the client.

********************************************************************************************************

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project contains an example project board meant to showcase how one can be used. The issues posted to it are not real issues.

#### _**IMPORTANT NOTE**_ - 
This project does not have a mongoDB connection setup. For:
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".
This project does not have a mongoDB connection setup. To set this up first uncomment the code at the top of server.js and then create a config file which exports your db.uri connection. To connect to the database on deployment DO NOT COMMIT YOUR CONFIG FILE TO YOUR REPO!!! Instead set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource


## Getting Started
This repository aims to assist you in beginning work on a MERN stack application with a solid file structure as a foundation. To get started make a copy of this template repo for your project teams.

Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json .

This app can be deployed directly to heroku since there is a script defined in package.json which will automatically handle building and deploying the app. For more information on deploying to heroku reference the extra resources at the bottom of this file. 

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `tests` - This holds all of our server tests that we have defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

If deploying to heroku this does not need to be run since it is handled by the heroku-postbuild script<br>

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
