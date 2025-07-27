import React, { useState, useEffect } from "react";
import styles from './Notes.module.css';

export default function Notes() {
    const savedNotes = localStorage.getItem('notesText') || '';
    const [userNotes, setNotes] = useState(savedNotes);

    useEffect(() => {
        localStorage.setItem('notesText', userNotes);
    }, [userNotes]);

    return (
        <div className={styles.notes_body}>
            <h1 className={styles.notes_heading}>All Notes</h1>
            <div className={styles.notes_input_container}>
                <textarea
                    id="notes_text"
                    name="notes_text"
                    className={styles.notes_input}
                    placeholder="Add Quick Notes..."
                    value={userNotes}
                    onChange={(e) => setNotes(e.target.value)} 
                />
            </div>
        </div>
    );
}
