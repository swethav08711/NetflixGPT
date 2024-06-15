import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_CONSTANT } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=4",
      API_CONSTANT
    );
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
