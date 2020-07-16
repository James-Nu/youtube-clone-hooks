import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSeacrTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSeacrTerm);
  }, [defaultSeacrTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
