import React, { useContext } from "react";
import styles from './Genre.module.css';
import Card from "../../component/Card/Card";
import Button from "../../component/Button/Button";
import genre_json from '../../json/genre.json';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GenreContext } from "../../context/GenreContext";
export default function Genre() {
  const { genreChoice, setGenreChoice } = useContext(GenreContext);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const handleNextPage = () => {
    if (genreChoice.length > 2) {
      setShowAlert(false);
      localStorage.setItem('genreChoice', JSON.stringify(genreChoice)); 
      navigate("/home", { replace: true });
    } else {
      setShowAlert(true);
    }
  }
  const handleGenreChoice = (item) => {
    setGenreChoice((prev) => {
      let updated;

      if (prev.includes(item.name)) {
        updated = prev.filter((g) => g !== item.name);
      } else {
        updated = [...prev, item.name];
      }

      if (updated.length > 2) {
        setShowAlert(false);
      }

      return updated;
    });
  };

  return (
    <div className={styles.genre_body}>
      <div className={styles.genre_left}>
        <h1 className={styles.heading}>Super App</h1>
        <p className={styles.sub_heading}>Choose Your Entertainment Category</p>
        <div className={styles.selected_genres}>
          {genreChoice.map((name, index) => (
            <Button key={index} work={name} removable={true} onClick={() => {
              setGenreChoice((prev) => prev.filter((g) => g !== name));
            }} />
          ))}
        </div>

        <p
          className={styles.genre_error}
          style={{ visibility: showAlert ? "visible" : "hidden" }}
        >
          &#x26A0; Minimum 3 Category Required
        </p>

      </div>

      <div className={styles.genre_right}>
        <div className={styles.genre_grid}>
          {genre_json.map((item, index) => (
            <Card key={index} item={item} selected={genreChoice.includes(item.name)} onClick={() => { handleGenreChoice(item) }} />
          ))}
        </div>

        <div className={styles.genre_button_container}>
          <Button className={styles.next_page_button} work="Next Page" onClick={handleNextPage} />
        </div>
      </div>
    </div>
  );
}
