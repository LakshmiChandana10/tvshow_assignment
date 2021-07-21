import axios from "axios";
export function getAllShows() {
  return axios.get("http://api.tvmaze.com/shows");
}
export function searchTvShows(query) {
  return axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
}
export function getDetails(id) {
  return axios.get(`http://api.tvmaze.com/shows/${id}`);
}
