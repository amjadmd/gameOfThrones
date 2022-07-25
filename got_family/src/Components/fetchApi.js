import { baseUrl } from "./constants";

export const fetchApi = (url, setLoading, setData) => {
  fetch(`${baseUrl}${url}`)
    .then((res) => res.json())
    .then(
      (data) => {
        setLoading(true);
        setData(data);
      },
      (error) => {
        setLoading(true);
        setData(error);
      }
    );
};
