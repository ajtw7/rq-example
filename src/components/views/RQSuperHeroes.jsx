import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchSuperHeroes

    // refetchInterval: 6000,
    // refetchOnWindowFocus: false
  });

  console.log(isFetching);

  // Instead of returning the promise via axios.get, the fetcher function is stored in a var (fetchSuperHeroes)
  /* () => {
    return axios.get("http://localhost:4000/superheroes");
  }
  ); */

  console.log("data destructured", data);

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHeroes</h2>
      <br />
      {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
