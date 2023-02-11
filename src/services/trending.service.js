import { http } from "./http.service";
export const getTrendingMovies = () => {
  return http.get("/trending/movie/day");
};
