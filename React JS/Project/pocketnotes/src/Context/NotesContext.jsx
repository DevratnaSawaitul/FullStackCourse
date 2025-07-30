import { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export default function NotesContextProvider({ children }) {
    const [notesData, setNotesData] = useState(() => {
        const saved = localStorage.getItem("notesData");
        return saved ? JSON.parse(saved) : {};
    });

    const [selectedGroup, setSelectedGroup] = useState(null);
    const [mobileView, setMobileView] = useState(false);

    useEffect(() => {
        localStorage.setItem("notesData", JSON.stringify(notesData));
    }, [notesData]);

    return (
        <NotesContext.Provider value={{ notesData, setNotesData, selectedGroup, setSelectedGroup, mobileView, setMobileView }}>
            {children}
        </NotesContext.Provider>
    );
}
