import { useState, useEffect } from "react";

function useFetchData(url) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if (response.ok) {
          setRecords(json.records);
        } else {
          setError(json.error.message);
        }
      } catch (problem) {
        setError("Could not load " + url + " (" + problem.message + ")");
      }
      setLoading(false);
    };
    load();
  }, [url]);

  return { records, loading, error };
}

export default useFetchData;
