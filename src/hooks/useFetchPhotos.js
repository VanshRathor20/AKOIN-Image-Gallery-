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

        const response = await axios.get(
          "https://picsum.photos/v2/list?limit=30",
        );
        setPhotos(response.data);
      } catch {
        setError("Unable to load photos. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
};

export default useFetchPhotos;
