import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-Clients";
interface DataFetched<T> {
  count: number;
  results: T[];
}
    
const useData = <T>(endpoint: string) => {
  const [error, setError] = useState("");
  const [Data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClients
      .get<DataFetched<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { Data, error, loading };
};

export default useData;
