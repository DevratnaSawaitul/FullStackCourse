import { createContext, useState } from "react";

export const GenreContext = createContext();

export default function GenreContextProvider({ children }) {
    const [genreChoice, setGenreChoice] = useState([]);
    return (
        <GenreContext.Provider value={{ genreChoice, setGenreChoice }}>
            {children}
        </GenreContext.Provider>
    );
}