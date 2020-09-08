import { axiosInstance } from "../config/AxiosInstance";

class MovieService {
  get() {
    return axiosInstance.get(`/movie`);
  }
}

export default new MovieService();
