import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchSuperHeroes = async () => {
  return await axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["superheroes"],
    queryFn: fetchSuperHeroes,

    // refetchInterval: 6000,
    cacheTime: 10000,
    refetchOnWindowFocus: false,
    onSuccess,
    onError,
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};
