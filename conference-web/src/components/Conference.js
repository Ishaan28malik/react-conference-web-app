import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
    const image =
        movie.imageURL === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.imageURL;
    return (
        <div className="movie">
            <h2>{movie.confName}</h2>
            <div>
                <img
                    width="200"
                    alt={`Conference Name: ${movie.confName}`}
                    src={image}
                />
            </div>
            <p>({movie.confStartDate})</p>
        </div>
    );
};

export default Movie;