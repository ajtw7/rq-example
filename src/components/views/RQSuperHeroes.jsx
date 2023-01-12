// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

import { useSuperHeroData } from "./hooks/useSuperHeroData";

// function called when query successfully fetches data
const onSuccess = () => {
  console.log("Perform side effect after data fetching");
};

// function called when query encounters an error
const onError = () => {
  console.log("Perform side effect after encountering error");
};

export const RQSuperHeroes = () => {
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroData(onError, onSuccess);

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

      {/* Data Transformation via select */}
      {data.map((myHero) => {
        return <div key={myHero}>{myHero}</div>;
      })}

      {/* Tradition mapping */}
      {/* {data?.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })} */}
      <br />
      <button onClick={refetch}>FETCH HEROES</button>
    </>
  );
};
