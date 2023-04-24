# NASA Media Library React App

This project is a React-based web application that utilizes NASA's public API for image collection. Users can search the library and view detailed information about specific results.

Preview: https://nasa-media-library-eight.vercel.app/

## Concept and design in [Figma](https://www.figma.com/file/a4PgwYlzWcebheyvmqWTlf/%D0%A1%D0%BA%D0%BB%D0%B0%D0%B4-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D0%BE%D1%81%D1%82%D0%B5%D0%B9?node-id=3-2&t=7D5CJuRMBualAs2J-0)

## Technologies Used

This project uses the following technologies:

`Typescript`
`React`
`React Router`
`Bootstrap`
`Sass`
`React Hook Form`
`React Datepicker`
`React Paginate`
`React i18n`
`Jest`
`React Testing Library`
`UUID`

## Features
### Search Page

Allows users to search the **NASA Media Library**
Users search endpoint in compliance with the API specification
Includes query input and two optional input filters (year start and year end)
Provides basic validations for user input
Displays search results with thumbnail, title, location, and photographer's name
Links to the Show Page for more details about a specific result

### Show Page

Displays details of a specific search result, including title, location, photographer's name, description, keywords, date, and images from the collection
Allows users to navigate back to search results page with the back button

## Getting Started
To get started with this project, clone this repository and follow these steps:

## Install dependencies with npm install
Start the application with **npm start**

## Testing
This project includes basic tests to ensure proper functionality. To run tests, use the following command: **npm run test**

## Credits
This project was created by Mikita Klimuk. Special thanks to NASA for providing the public API and Ilya Grigorenko for designing the project.

## Preview 
### Main page with filters<img width="1680" alt="main page with filters" src="https://user-images.githubusercontent.com/44801567/233935432-871c4faa-10d4-49f3-904d-c2ccec336cd5.png">

### Details page (whith selected card)
<img width="1644" alt="details page" src="https://user-images.githubusercontent.com/44801567/233935876-389c2340-2128-433b-b571-9badaa4913bf.png">

### Yerspicker styles
<img width="569" alt="yearspicker style" src="https://user-images.githubusercontent.com/44801567/233936111-16b61c79-5955-42c0-a080-eede3ea3002c.png">

### Mobile optimization
<img width="323" alt="main page mobile" src="https://user-images.githubusercontent.com/44801567/233936490-df09cec1-8fd7-4779-a6bc-9bacd94d2365.png">
<img width="514" alt="details page mobile" src="https://user-images.githubusercontent.com/44801567/233936243-80351760-a10f-4a3e-9f27-a16c55f12901.png">


