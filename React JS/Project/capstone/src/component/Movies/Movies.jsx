import React, { useEffect, useState } from "react";
import styles from './Movies.module.css';
import profile_img from '../../images/avatar.png';
import { useNavigate } from "react-router-dom";
import genre_image_json from '../../json/genre_images.json';
import MovieGrid from "../MovieGrid/MovieGrid";
import { getMovies } from "../../apis/movies";

export default function Movies() {
    const navigate = useNavigate();
    const user_genre_choice = JSON.parse(localStorage.getItem('genreChoice') || '[]');

    const genresToFetch = user_genre_choice.length === 0
        ? genre_image_json.map(g => g.name)
        : user_genre_choice;

    const [moviesByGenre, setMoviesByGenre] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await Promise.all(
                genresToFetch.map(async (genre) => {
                    const movies = await getMovies(genre);
                    return { name: genre, movies: movies || [] };
                })
            );
            setMoviesByGenre(data);
        };
        fetchMovies();
    }, []);

    return (
        <div className={styles.movies_container}>
            <h1 className={styles.app_heading}>Super App</h1>
            <img
                className={styles.profile_img}
                src={profile_img}
                alt="Profile"
                onClick={() => navigate("/home", { replace: true })}
            />
            <div className={styles.movies_sub_container}>
                <h2 className={styles.sub_heading}>Entertainment according to your choice</h2>

                <div className={styles.genre_grid}>
                    {moviesByGenre.map((item, index) => (
                        <MovieGrid key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
