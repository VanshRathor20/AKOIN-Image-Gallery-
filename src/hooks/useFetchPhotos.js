import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        // Single GET request on page load — no re-fetching on search/filter.
        const response = await axios.get(
          "https://picsuum.photos/v2/list?limit=30",
        );
        setPhotos(response.data);
      } catch {
        // Any network or HTTP error surfaces here as a friendly message.
        setError("Unable to load photos. Please try again.");
      } finally {
        // Always turn off the spinner, success or failure.
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []); 

  return { photos, loading, error };
};

export default useFetchPhotos;
