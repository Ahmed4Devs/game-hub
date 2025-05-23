
import genres from "../data/genres";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null }); //useData<Genre>('/genres');

export default useGenres;