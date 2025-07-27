import React from "react";
import styles from './MovieGrid.module.css';
import Swal from 'sweetalert2';

export default function MovieGrid({ item }) {
    const handleImageClick = (url, title, year) => {
        Swal.fire({
            title: title,
            html: `<b>Release Year:</b> ${year}`,
            imageUrl: url,
            imageWidth: "auto",
            imageHeight: 180,
            imageAlt: title,
            confirmButtonColor: '#6C63FF'
        });
    };

    return (
        <div className={styles.movie_grid_body}>
            <h1 className={styles.movie_subheading}>{item.name}</h1>

            <div className={styles.movie_images_row}>
                {item.movies.map((movie, index) => (
                    <img
                        key={movie.imdbID}
                        src={movie.Poster !== "N/A" ? movie.Poster : "fallback.jpg"}
                        alt={movie.Title}
                        className={styles.movie_img}
                        onClick={() => handleImageClick(movie.Poster, movie.Title, movie.Year)}
                    />
                ))}
            </div>
        </div>
    );
}
