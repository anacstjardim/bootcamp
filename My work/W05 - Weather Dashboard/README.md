# Weather Dashboard (W05)

A simple weather dashboard that shows current weather for a city. Week 5 bootcamp project.

## What it does

- Enter a city name and click Search (or press Enter)
- Uses geocoding to find the place, then fetches current weather
- Shows temperature (C), short description, humidity, and wind speed
- Shows "Loading..." while fetching
- Shows clear messages if the city is not found or the request fails (e.g. network error)

## How to run

1. Open the project folder
2. Open `index.html` in your browser (double-click or Open with browser)

No server or install needed. The app talks to Open-Meteo APIs over the internet, so you need an internet connection.

## Files

- `index.html` – page structure, search input, result area
- `style.css` – layout and styles, works on mobile and desktop
- `script.js` – geocoding, API fetch, UI update, error handling

## API

Uses [Open-Meteo](https://open-meteo.com/) (free, no API key):

- Geocoding: city name to latitude/longitude
- Weather: current conditions for that location

No API key is stored or required. All requests go from the browser to Open-Meteo.

## Tech

- HTML5
- CSS3 (responsive)
- Vanilla JavaScript (fetch, promises, DOM)
