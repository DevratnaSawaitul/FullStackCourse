import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from './NoteData.module.css';
import { NotesContext } from "../../Context/NotesContext";
import banner from '../../images/banner.png';

export default function NoteData() {
    const { notesData, setNotesData, selectedGroup, setSelectedGroup, mobileView } = useContext(NotesContext);
    const [userInput, setUserInput] = useState("");
    const [editId, setEditId] = useState(null);

    const scrollRef = useRef(null); // ✅ ref to scroll container

    const returnToGroup = () => setSelectedGroup(null);

    const saveToGroup = (e) => {
        if (e) e.preventDefault();
        if (!userInput.trim()) return;

        const now = new Date();
        const newNote = {
            id: editId || now.getTime(),
            text: userInput.trim(),
            date: now.toLocaleDateString("en-GB"),
            time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setNotesData(prev => {
            const updated = { ...prev };
            const existingNotes = updated[selectedGroup]?.notes || [];
            const filtered = existingNotes.filter(n => n.id !== editId);
            updated[selectedGroup].notes = [...filtered, newNote];
            return updated;
        });

        setUserInput("");
        setEditId(null);
    };

    const handleEdit = (note) => {
        setUserInput(note.text);
        setEditId(note.id);
    };

    if (!selectedGroup) {
        return (
            <div className={styles.note_data_body}>
                <div className={styles.banner_style}>
                    <img src={banner} alt="Loading Banner..." className={styles.banner_img} />
                    <h1 className={styles.banner_heading}>Pocket Notes</h1>
                    <h5 className={styles.banner_sub_heading}>Send and receive messages without keeping your phone online.</h5>
                    <h5 className={styles.banner_sub_heading}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h5>
                    <h5 className={styles.banner_sub_heading_bottom}>
                        <FontAwesomeIcon icon={faLock} style={{ color: "black", marginRight: "5px" }} />
                        end-to-end encrypted
                    </h5>
                </div>
            </div>
        );
    }

    const displayNotes = notesData[selectedGroup].notes;

    useEffect(() => {
        if (selectedGroup && scrollRef.current) {
            const notes = notesData[selectedGroup]?.notes || [];
            if (notes.length > 0) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }, [selectedGroup, notesData]); // dependency updated


    return (
        <div className={styles.note_data_body}>
            {/* Header */}
            <div className={styles.notes_header_data}>
                {mobileView && <h2 className={styles.back_arrow} onClick={returnToGroup}>&#x21d0;</h2>}
                <p className={styles.data_name_dp} style={{ backgroundColor: notesData[selectedGroup].color }}>
                    {selectedGroup.toUpperCase().substring(0, 2)}
                </p>
                <h2 title={selectedGroup}>{selectedGroup}</h2>
            </div>

            {/* ✅ Attach ref here */}
            <div className={styles.notes_body_data} ref={scrollRef}>
                {displayNotes.length === 0 && <p>Add Notes....</p>}

                {displayNotes.map(note => (
                    <div key={note.id} className={styles.note_card} onClick={() => handleEdit(note)}>
                        <div className={styles.note_time}>
                            <div>{note.time.toUpperCase()}</div>
                            <div>{note.date}</div>
                        </div>
                        <div className={styles.note_text}>{note.text}</div>
                    </div>
                ))}
            </div>

            <div className={styles.notes_footer_data}>
                <div className={styles.input_wrapper}>
                    <textarea
                        className={styles.data_input_area}
                        rows="3"
                        autoFocus
                        value={userInput}
                        placeholder="Enter your text here..."
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                saveToGroup(e);
                            }
                        }}
                    />
                    <button className={styles.send_button} onClick={saveToGroup}>
                        <FontAwesomeIcon icon={faPaperPlane} className={styles.data_input_area_send_icon} />
                    </button>
                </div>
            </div>
        </div>
    );
}