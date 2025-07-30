import React, { useContext, useState } from "react";
import styles from './NoteGroupPopup.module.css';
import { NotesContext } from "../../Context/NotesContext";

export default function NoteGroupPopup({ closePopup }) {
    const { notesData, setNotesData } = useContext(NotesContext);

    const [groupName, setGroupName] = useState("");
    const [selectedColor, setSelectedColor] = useState("#a78bfa");
    const [nameAlreadyExistError, setNameAlreadyExistError] = useState(false);
    const [nameEmptyError, setNameEmptyError] = useState(false);

    const colors = ["#a78bfa", "#ec4899", "#f472b6", "#22d3ee", "#fca5a5", "#2563eb", "#60a5fa"];

    const createGroup = () => {
        const trimmedName = groupName.trim();
        if (trimmedName.length < 2) {
            setNameEmptyError(true);
            setNameAlreadyExistError(false);
            return;
        }

        if (notesData[trimmedName]) {
            setNameAlreadyExistError(true);
            setNameEmptyError(false);
            return;
        }

        setNotesData(prev => ({
            ...prev,
            [trimmedName]: {
                color: selectedColor,
                notes: []
            }
        }));

        setGroupName("");
        setNameEmptyError(false);
        setNameAlreadyExistError(false);
        closePopup();
    };

    return (
        <div id='notes_popup_body' className={styles.notes_popup_body}>
            <div className={styles.popup_content}>
                <h2>Create New Notes Group</h2>
                <div>
                    <label>Group Name</label>
                    <input
                        type="text"
                        placeholder="Enter your group name..."
                        value={groupName}
                        onChange={(e) => {
                            setGroupName(e.target.value);
                            setNameEmptyError(false);
                            setNameAlreadyExistError(false);
                        }}
                    />
                    {nameEmptyError && <p className={styles.error_msg}>Name is mandatory and must contain at least two letters.</p>}
                    {nameAlreadyExistError && <p className={styles.error_msg}>The group name you entered already exists.</p>}
                </div>

                <div>
                    <label>Choose Colour</label>
                    <div className={styles.color_picker}>
                        {colors.map((color) => (
                            <span
                                key={color}
                                className={`${styles.color_circle} ${selectedColor === color ? styles.selected : ""}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            ></span>
                        ))}
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", flexWrap: "wrap" }}>
                    <button className={styles.create_button} onClick={createGroup}>Create</button>
                    <button className={styles.close_button} onClick={closePopup}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
