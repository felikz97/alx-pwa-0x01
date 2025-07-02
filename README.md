# alx-project-0x14

## API Overview

The MoviesDatabase API allows developers to access a rich collection of movie data. It supports searching for movies by title or keyword, retrieving detailed information about specific movies, browsing genres, and viewing popular or trending movies. This API is ideal for applications that require up-to-date and comprehensive movie data, including titles, posters, ratings, and more.

## Version

API Version: **v1.2**

## Available Endpoints

- `GET /movies/search` – Search for movies using a keyword.
- `GET /movies/{id}` – Retrieve detailed information for a specific movie by ID.
- `GET /genres` – Retrieve a list of all movie genres.
- `GET /movies/popular` – Get a list of currently popular movies.
- `GET /movies/trending` – Fetch trending movies, with optional timeframe (`day` or `week`).

## Request and Response Format

### Base URL: 
https://api.moviesdatabase.com
