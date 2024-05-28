# Podcaster App

Podcaster App is a Single Page Application (SPA) that allows users to browse and listen to top podcasts. Users can view a list of top podcasts, filter them, and navigate to detailed views of individual podcasts to see their episodes and listen to them.

## Features

- Browse a list of top podcasts
- Filter podcasts by title and author
- View detailed information about each podcast
- See a list of episodes for each podcast
- Listen to podcast episodes directly within the app

## Scripts

The following scripts are defined in the `package.json` file and can be used to manage the development, building, testing, and linting of the project:

### Development

- `start`: starts the development server using Webpack Dev Server with the configuration specified in webpack.config.js in development mode.

```
npm run start
```

- `build`: builds the application for production using Webpack with the configuration specified in webpack.config.js in production mode.

```
npm run build
```

- `serve:build`: serves the production build from the dist directory using the serve package.

```
npm run serve:build
```

### Testing

- `test`: runs the unit tests using Jest.

```
npm test
```

- `test:watch`: runs the unit tests in watch mode using Jest.

```
npm run test:watch
```

- `cypress:open`: opens the Cypress Test Runner for end-to-end (E2E) testing.

```
npm run cypress:open
```

- `test:e2e`: starts the development server and then runs Cypress for E2E testing using the start-server-and-test package.

```
npm run test:e2e
```

### Linting and Formatting

- `eslint`: runs ESLint to lint the codebase and identify potential issues.

```
npm run eslint
```

- `prettier`: runs Prettier to format the codebase according to the specified style rules.

```
npm run prettier
```

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```
git clone <repository-url>
cd podcast-app
```

2. Install dependencies:

```
npm install
```

## Running the App

To start the development server and run the app locally:

```
npm start
```

## Building the App

To build the app for production:

```
npm run build
```

To serve the production build:

```
npm run serve:build
```

## Running Tests

To run unit tests:

```
npm test
```

To run end-to-end tests:

```
npm run test:e2e
```

## Linting and Formatting

To lint the codebase:

```
npm run eslint
```

To format the codebase:

```
npm run prettier
```

# One disclaimer about the task

The API doesn't return the description of the podcast. Here's an example of the object, it doesn't contain description prop. I couldn't find info about it in the API docs as well.

```
{
    "wrapperType": "track",
    "kind": "podcast",
    "collectionId": 1572182022,
    "trackId": 1572182022,
    "artistName": "Rory Farrell & Jamil \"Mal\" Clay & Studio71",
    "collectionName": "New Rory & MAL",
    "trackName": "New Rory & MAL",
    "collectionCensoredName": "New Rory & MAL",
    "trackCensoredName": "New Rory & MAL",
    "collectionViewUrl": "https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=4",
    "feedUrl": "https://feeds.megaphone.fm/RAM2864828665",
    "trackViewUrl": "https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022?uo=4",
    "artworkUrl30": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/30x30bb.jpg",
    "artworkUrl60": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/60x60bb.jpg",
    "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/100x100bb.jpg",
    "collectionPrice": 0,
    "trackPrice": 0,
    "collectionHdPrice": 0,
    "releaseDate": "2024-05-24T08:00:00Z",
    "collectionExplicitness": "notExplicit",
    "trackExplicitness": "explicit",
    "trackCount": 275,
    "trackTimeMillis": 6876,
    "country": "USA",
    "currency": "USD",
    "primaryGenreName": "Music",
    "contentAdvisoryRating": "Explicit",
    "artworkUrl600": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/31/80/56/3180562e-ac0b-f10e-7120-641b1c26e0f8/mza_10135383815267163613.jpg/600x600bb.jpg",
    "genreIds": [
        "1310",
        "26",
        "1303"
    ],
    "genres": [
        "Music",
        "Podcasts",
        "Comedy"
    ]
}
```
