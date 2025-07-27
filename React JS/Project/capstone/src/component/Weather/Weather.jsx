import React, { useEffect, useState } from "react";
import styles from './Weather.module.css';
import { getWeather } from "../../apis/weather";

export default function Weather() {
    const [currentTime, setCurrentTime] = useState('');
    const [weather, setWeather] = useState(null);

    const updateTime = () => {
        const date = new Date().toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
        const time = new Date().toLocaleTimeString().toUpperCase();
        setCurrentTime(date + '   ' + time);
    };

    const fetchWeather = async () => {
        const data = await getWeather();
        if (data) setWeather(data);
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    useEffect(() => {
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.weather_body}>
            <div className={styles.time}>
                <span>{currentTime}</span>
            </div>
            <div className={styles.weather}>
                {weather ? (
                    <>
                        <div className={styles.weather_icon}>
                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />
                            <p>{weather.weather[0].description}</p>
                        </div>
                        <div className={styles.weather_temp}>{Math.round(weather.main.temp)}°C</div>
                        <div className={styles.weather_details}>
                            <p>💨 {weather.wind.speed} km/h Wind</p>
                            <p>🌡️ {weather.main.pressure} mbar Pressure</p>
                            <p>💧 {weather.main.humidity}% Humidity</p>
                        </div>
                    </>
                ) : (
                    <p>Loading Weather...</p>
                )}
            </div>
        </div>
    );
}
