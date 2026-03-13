import { useReducer, useState } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import favouritesReducer from "../reducers/favouritesReducer";
import PhotoCard from "./PhotoCard";

// Restore favourites from localStorage on first load.
const loadFavourites = () => {
  try {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const Gallery = () => {
  const { photos, loading, error } = useFetchPhotos();

  // Search query — filters already-fetched photos, no extra API call.
  const [query, setQuery] = useState("");

  // Favourites managed by useReducer. Initial state rehydrated from localStorage.
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites,
  );

  // Toggle a photo in/out of favourites and sync to localStorage.
  const toggleFavourite = (photo) => {
    const isFav = favourites.some((f) => f.id === photo.id);
    const action = isFav ? "REMOVE_FAVOURITE" : "ADD_FAVOURITE";
    const next = favouritesReducer(favourites, {
      type: action,
      payload: photo,
    });
    dispatch({ type: action, payload: photo });
    localStorage.setItem("favourites", JSON.stringify(next));
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-400 border-t-gray-700" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        <p className="text-sm font-medium text-red-600">{error}</p>
      </div>
    );
  }

  // Case-insensitive filter on author name — no extra API call.
  const filtered = photos.filter((photo) =>
    photo.author.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-2xl text-center mb-4 font-bold text-gray-900">
        Photo Gallery
      </h1>

      {/* Search input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by author…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full max-w-md rounded-lg border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-gray-500 focus:outline-none"
        />
      </div>

      {/* No-results message */}
      {filtered.length === 0 ? (
        <p className="text-center text-sm text-gray-500">No photos found.</p>
      ) : (
        /* Responsive grid: 1 col mobile, 2 col tablet, 4 col desktop. */
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.some((f) => f.id === photo.id)}
              onToggleFavourite={toggleFavourite}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default Gallery;
