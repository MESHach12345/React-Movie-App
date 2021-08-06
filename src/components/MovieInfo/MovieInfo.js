import React from "react";

import Thumb from "../Thumb/Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config.js";
import { Wrapper, Content, Text } from "./MovieInfo.styles";

import NoImage from "../../images/no_image.jpg";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />

      <Text>
        <h1>{movie.title}</h1>
        {console.log(movie)}
        <h3>Plot: </h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div>
            <h3>LANGUAGE</h3>
            <div className="language">{movie.original_language}</div>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
