### Celebrare Image Gallery

Responsive Photo Gallery built with React, Vite, and Tailwind. Features API data fetching, real-time search filtering, favourites management using useReducer with localStorage persistence, and performance optimization using useCallback and useMemo.

---

## Features

- Fetches 30 photos from the **Picsum API**

- Displays images in a **responsive grid layout**

- **Real-time search filter** by author name

- **Favourite toggle** using `useReducer`

- **Persistence using localStorage**

- API logic extracted into a **custom hook (useFetchPhotos)**

- Performance optimization using **useCallback** and **useMemo**
---

## Tech Stack

- React

- Vite

- Tailwind CSS

- Axios
  
---
## Installation

Clone the repository:

```
git clone https://github.com/VanshRathor20/AKOIN-Image-Gallery-.git
```

## Install dependencies:
```
npm install
```

Run the development server:

```
npm run dev
```

---
## 📁Project Structure

```
├── 📁 assets
│   └── 🖼️ react.svg
├── 📁 components
│   ├── 📄 Gallery.jsx
│   └── 📄 PhotoCard.jsx
├── 📁 hooks
│   └── 📄 useFetchPhotos.js
├── 📁 reducers
│   └── 📄 favouritesReducer.js
├── 📄 App.jsx
├── 🎨 index.css
└── 📄 main.jsx
```
