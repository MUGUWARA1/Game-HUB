import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClients from "../services/api-Clients";
interface DataFetched<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig,deps?:any[]) => {
  const [error, setError] = useState("");
  const [Data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClients
      .get<DataFetched<T>>(endpoint,{ signal: controller.signal,...requestConfig })
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
  }, deps?[...deps]:[]);

  return { Data, error, loading };
};

export default useData;
