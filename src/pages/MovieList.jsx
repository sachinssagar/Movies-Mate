import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

  return (
    <main>
      <div className="max-w-7xl mx-auto py-7">
        <div
          className="flex justify-start flex-wrap gap-4
          other:justify-evenly"
        >
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
