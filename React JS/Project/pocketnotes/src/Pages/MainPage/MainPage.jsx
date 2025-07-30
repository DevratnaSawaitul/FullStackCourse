import React, { useState, useEffect } from "react";
import styles from './MainPage.module.css'
import NoteGroup from "../../component/NoteGroup/NoteGroup";
import NoteGroupPopup from "../../component/NoteGroupPopup/NoteGroupPopup";
import NoteData from "../../component/NoteData/NoteData";
import { useContext } from "react";
import { NotesContext } from "../../Context/NotesContext";

export default function MainPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { notesData, selectedGroup, mobileView, setMobileView } = useContext(NotesContext);
    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= 768;
            setIsMobile(isNowMobile);
            setMobileView(isNowMobile);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className={styles.main_page_body}>
            {/* Show NoteGroup if desktop OR (mobile and no group selected) */}
            {(!isMobile || (isMobile && !selectedGroup)) && (
                <NoteGroup openPopup={() => setIsPopupOpen(true)} />
            )}
            {/* Show NoteData if desktop OR (mobile and group is selected) */}
            {(!isMobile || (isMobile && selectedGroup)) && (
                <NoteData group={selectedGroup} />
            )}
            {isPopupOpen && <NoteGroupPopup closePopup={() => setIsPopupOpen(false)} />}
        </div>
    );
}