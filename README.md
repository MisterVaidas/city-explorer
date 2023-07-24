# Project Name: City Explorer

**Author**: Vaidas Simkus  
**Version**: 1.0.0

## Overview
City Explorer is a React application that allows users to explore different cities around the world by displaying essential information and a map of the city. The user enters the name of the city they are interested in, and the application fetches the data and displays it to the user. The application is powered by the LocationIQ API.

## Getting Started
1. Clone this repository to your local machine.
2. Navigate to the directory where you cloned the repository.
3. Run `npm install` to install all dependencies.
4. Create a `.env` file at the root of your project and add your LocationIQ API key as `REACT_APP_API_KEY`.
5. Start the application using `npm start`.
6. Open your browser and visit `http://localhost:3000`.

## Architecture
This application is built using React.js, a popular front-end JavaScript framework. We're also utilizing Axios for promise based HTTP requests, the LocationIQ API for retrieving city information and maps, and Bootstrap for component styling. The application is designed to be responsive and user-friendly.

## Change Log
- 07-24-2023 4:59pm - Initial commit, set up basic file structure and dependencies.
- 07-24-2023 5:30pm - Set up form for user input and handling LocationIQ API request.
- 07-24-2023 6:15pm - Implemented functionality to display city information and map.
- 07-24-2023 10:00pm - Added error handling for API calls.
- 07-24-2023 9:30pm - Added CSS styles to improve the app's aesthetics.

## Credits and Collaborations
- [LocationIQ](https://locationiq.com/) - Geocoding and Maps API
- [React Bootstrap](https://react-bootstrap.github.io/) - UI Framework
- [Axios](https://axios-http.com/docs/intro) - Promise based HTTP client for the browser and node.js
