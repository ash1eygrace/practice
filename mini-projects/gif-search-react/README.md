# Giphy Search

## Live demo

https://ash1eygrace.github.io/practice/mini-projects/gif-search-react

## Purpose of this App 🤖

This app allow you to search Giphy for GIFs.

## App overview:

- displays default GIFs on the homepage on the initial load
- search bar that accepts a user input
- uses [Axios](https://axios-http.com/docs/example) to get response of user's query from Giphy's [API search endpoint](https://developers.giphy.com/docs/api/endpoint/#search)
- handles race conditions for quick consecutive searches
- displays a loading screen while we await the response 
- replaces default homepage GIFs with the results of user query