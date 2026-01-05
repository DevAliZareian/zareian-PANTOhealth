# **PANTOhealth Sample Project**

A **React-based Train Station Visualizer** that helps users interact with train station data in Germany, displaying stations on a map, and allowing for filtering by city. This app is built with a modern and responsive UI using **React**, **Leaflet.js**, and **Zustand** for state management.

![UI-app](https://github.com/DevAliZareian/zareian-PANTOhealth/blob/main/public/assets/UI-app.png)

## **Features**

- [x] **Train Station Visualization** – Display stations on an interactive map using **Leaflet.js**
- [x] **City Filter** – Filter stations by city to focus on specific regions
- [x] **Map Interaction** – Click on the stations in the list to zoom and highlight the corresponding map marker
- [x] **Station List** – View a list of stations with their names and cities
- [x] **Responsive UI** – Seamless experience across devices, from desktop to mobile

## **Technologies**

- **React 18** (Frontend Framework)
- **TypeScript** (Static Typing)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Leaflet.js** (Map Rendering)
- **Zustand** (State Management)
- **React Query** (Data Fetching)
- **Axios** (HTTP Requests)
- **Jest** (Testing)

## **Installation**

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/DevAliZareian/zareian-PANTOhealth.git

# Navigate into the project directory
cd zareian-PANTOhealth

# Install dependencies
npm install

# Start the development server
npm run dev
```

## **Usage**

- **View Map**: The map will show the locations of all train stations in Germany.
- **Filter Stations by City**: Use the input field to filter the stations by city name (e.g., "Berlin").
- **Click on a Station**: Clicking on a station name from the list will zoom the map to that station’s location and highlight the marker.
- **Responsive Design**: The app is responsive and works well across different screen sizes, from desktops to mobile devices.

## **Testing**

The application is tested using **Jest**. To run the tests:

```bash
# Run tests
npm test
```

