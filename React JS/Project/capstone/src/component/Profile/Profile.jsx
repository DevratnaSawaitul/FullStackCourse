import React from "react";

import styles from './Profile.module.css'
import profile_img from '../../images/avatar.png'
import Button from "../Button/Button";
export default function Profile() {
    const userData = JSON.parse(localStorage.getItem('registerData') ?? '{}');
    const genreChoice = JSON.parse(localStorage.getItem('genreChoice') ?? '[]');

    return (
        <div className={styles.profile_body}>
            <div className={styles.profile_img_container}>
                <img className={styles.profile_img} src={profile_img} alt="Profile" />
            </div>

            <div className={styles.profile_details}>
                {userData && <h5>{userData.fname}</h5>}
                {userData && <h5>{userData.email}</h5>}
                {userData && <h1>{userData.user_name|| 'Hello User'}</h1>}

                <div className={styles.genre_container}>
                    {genreChoice && genreChoice.map((item, index) => (
                        <Button profile={true} key={index} work={item} id={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}