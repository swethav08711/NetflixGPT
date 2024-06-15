import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=4",
      API_CONSTANT
    );
    const data = await response.json();
    console.log(data);
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
