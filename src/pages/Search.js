import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle"; 

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const {data:movies} = useFetch(apiPath,queryTerm);

  useTitle(`Search Results For ${queryTerm}`);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white pl-10 pt-10">{movies.length===0 ? `No Result found for '${queryTerm}'`:`Results found for '${queryTerm}'`}</p>
      </section>
    <section className="m-auto py-7">
      <div className="flex justify-center flex-wrap">
        {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </section>
  </main>
  )
}
