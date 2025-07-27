import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'
import News from '../News/News'
import Notes from '../Notes/Notes'
import Profile from '../Profile/Profile'
import StopWatch from '../StopWatch/StopWatch'
import Weather from '../Weather/Weather'
import styles from './Home.module.css'

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className={styles.home_container}>
            <div className={styles.home_body}>
                <Profile />
                <Notes />
                <News />
                <Weather />
                <StopWatch />
            </div>
            <div className={styles.side_button}>
                <Button work='Browse' onClick={() => { navigate("/movies", { replace: true }); }} />
            </div>
        </div>
    )
}

