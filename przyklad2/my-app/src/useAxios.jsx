import { useState, useEffect } from "react";
import axios from "axios";

export function useAxios(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}
