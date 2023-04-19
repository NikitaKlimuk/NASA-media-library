#NASA Media Library React App#
This project is a React-based web application that utilizes NASA's public API for image collection. Users can search the library and view detailed information about specific results.

##Technologies Used##
This project uses the following technologies:

React
React Router
Bootstrap
Sass
React Hook Form
React Datepicker
React Paginate
React i18n
UUID

##Features##
###Search Page###

Allows users to search the NASA Media Library
Uses the /search endpoint in compliance with the API specification
Includes query input and two optional input filters (year start and year end)
Provides basic validations for user input
Displays search results with thumbnail, title, location, and photographer's name
Links to the Show Page for more details about a specific result

###Show Page###

Displays details of a specific search result, including title, location, photographer's name, description, keywords, date, and images from the collection
Allows users to navigate back to search results page with the back button
Getting Started
To get started with this project, clone this repository and follow these steps:

##Install dependencies with npm install##
Start the application with npm start

##Testing##
This project includes basic tests to ensure proper functionality. To run tests, use the following command: npm test.

##Credits##
This project was created by [Your Name]. Special thanks to NASA for providing the public API.
