import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getPlayingNowMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_CONSTANT
    );
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
  useEffect(() => {
    getPlayingNowMovies();
  }, []);
};

export default useNowPlayingMovies;
