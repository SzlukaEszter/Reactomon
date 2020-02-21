import axios from "axios";
import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setisLoading] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    setisLoading(true);
    console.log("sending httr request to url: " + url);
    axios
      .get(url)
      .then(res => {
        setisLoading(false);
        setData(res.data);
      })
      .catch(err => {
        alert("Oops! Something went wrong.");
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return [isLoading, data];
};
