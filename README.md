# Welcome to [Space Monki](https://spacemonki.netlify.app/) 🚀 
A full-stack web application created using the MERN stack, TypeScript and Tailwind CSS. Space Monki is designed to allow users to view and explore stunning images from space, fetched in real time from the NASA APOD API. 

![client/src/assets/Website Snapshot.png](https://github.com/monkikat/SpaceMonki/blob/main/client/src/assets/Website%20Snapshot.png)

## Features
- **Latest APODs:** Displays the Picture of the Day (POD) and PODs from the past week
- **Search by date:** Allows user to find any APOD between today and June 16, 1995 by selecting a date
- **Real time data:** Cron job set up to fetch latest data daily and display it in real time 
- **Caching:** Data fetched from the API is stored in the database for faster data retrieval, database is maintained and updated using a cron job

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, TypeScript
- **Backend:** Node.js, Express.js, MongoDB
- **Hosting:** Vercel for the client-side, Render for the server-side

## To run the project locally
1. Clone the repository: <br>
```
git clone https://github.com/monkikat/SpaceMonki.git
```

2. Install dependencies: <br>
```
cd server
npm install 
npm install -D nodemon
```

```
cd client
npm install vite
```

3. Set up environment variables in .env file:
```
MONGO_URL = 'add-your-mongo-url'
NASA_APOD_KEY = 'DEMO_KEY'
```

4. Start the development server for backend using nodemon: 
```
npm run dev
```

4. Start the development server for client-side using Vite: 
```
npm run dev
```

## API Endpoints:
- `api/apod` : Fetch todays POD from the database
- `api/apod/:date` : Fetch POD by date, if a POD for the date exists in the database, the data is fetched from the database, else it is retrieved from the API
- `api/apod/week` : Fetches the latest week's PODs
- `api/apod/randomAPOD` : Fetches a random POD from the 100 stored latest PODs in the database, to be displayed across the site

## Cron Job for Database Updates
A CRON job is set up to run daily at 12:00 a.m. and fetch the latest POD from NASA's API. The database has 100 of the latest PODs at all times, the cron job fetches the latest POD and stores it in the database. It then deletes the oldest POD from the database.

## Deployment
SpaceMonki is deployed on Render and Netlify, Render to host the backend server and Netlify to host the client side application.
