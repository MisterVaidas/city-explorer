import React from 'react';
import { Card } from 'react-bootstrap';
import './css/movies.css';  

class Movies extends React.Component {
    render() {
        const { movieData } = this.props;

        return (
            <div className="movie-container">
                {movieData.map(movie => (
                    <Card key={movie.title} className="movie-card">
                        <Card.Img variant="top" src={movie.image_url} className="movie-img"/>
                        <Card.Body className="movie-body">
                            <Card.Title className="movie-title">{movie.title}</Card.Title>
                            <Card.Text className="movie-text">
                                {movie.overview}
                                <br />
                                Average Votes: {movie.average_votes}
                                <br />
                                Total Votes: {movie.total_votes}
                                <br />
                                Popularity: {movie.popularity}
                                <br />
                                Released on: {movie.released_on}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        );
    }
}

export default Movies;
