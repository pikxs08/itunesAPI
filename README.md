# iTunes Search App

## Overview

This application allows users to search the iTunes Store for music, movies, TV shows, and more. Users can mark items as favorites, and their selections are stored securely. The backend is built with Express.js, providing a RESTful API to handle CRUD operations and storing favorites in a `favorites.json` file. The frontend is developed using Create React App and fetches search results from the iTunes Search API.

## How to Use the App

1. **Search**: Enter a query into the search bar on the frontend to search the iTunes Store. If you would like to filter the searched items, type in the name, and select a category to search by.
2. **View Results**: Browse through the search results displayed on the frontend.
3. **Add to Favorites**: Click on the Star Icon button to save an item to your favorites list.
4. **View Favorites**: Next to the search bar,a list of favourites will be located

## Installation and Running Locally

### Backend - Drect Git REPO: https://github.com/pikxs08/itunesAPI.git

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Start the backend server with `npm start` or `npm run dev` for development mode.

### Frontend - Direct Git REPO: https://github.com/pikxs08/frontend.git

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Start the frontend server with `npm start`.

## Security Measures

### Backend Security

- **Express.js**: The backend is built using Express.js, a robust and secure framework for building web applications.
- **Helmet**: The app is secured using Helmet, which helps protect against well-known web vulnerabilities by setting HTTP headers appropriately.
- **Data Storage**: User favorites are stored securely in a JSON file on the server, accessible only through authorized API endpoints.

### API Key Handling

- **Environment Variables**: API keys are stored as environment variables and accessed securely within the application code. They are not hard-coded into the source files, reducing the risk of exposure.
- **Proxy**: The frontend uses a proxy to communicate with the backend, ensuring that sensitive API keys are not exposed to the client-side code.

## Deployment

The backend is hosted on Heroku, and the frontend is deployed on Vercel. 

**Deployed App**: [iTunes Search App] - https://frontend-jade-two-39.vercel.app/
**Heroku Backend**: https://itunes-search-express-309705ffa24d.herokuapp.com/api
