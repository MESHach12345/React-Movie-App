import React from "react";

//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//Components
import HeroImage from "../components/HeroImage/HeroImage";
import Grid from "../components/Grid/Grid";
import Thumb from "../components/Thumb/Thumb";
import Spinner from "../components/Spinner/Spinner";
import SearchBar from "../components/SearchBar/SearchBar";

//Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

//Image
import NoImage from "../images/no_image.jpg";

function Home() {
  const { state, loading, error, setSearchTerm, searchTerm} = useHomeFetch();

  console.log(state);

  return (
    <div>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Grid header={!searchTerm? "Popular Movies": "Search Results"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </div>
  );
};

export default Home;
