import { createContext, useState } from "react";

export const RegisterContext = createContext();

export default function RegisterContextProvider({ children }) {
    const [registerInputs, setRegisterInputs] = useState(
        {
            fname: '',
            user_name: '',
            email: '',
            phone: null,
            terms_condition_checkbox: false
        }
    );
    return (
        <RegisterContext.Provider value={{ registerInputs, setRegisterInputs }}>
            {children}
        </RegisterContext.Provider>
    );
}