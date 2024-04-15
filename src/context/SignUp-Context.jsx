import { createContext, useContext, useReducer } from "react";
import { SignUpReducer } from "../reducer/SignUp-Reducer";
import { useEffect } from "react";

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  image: null,
  location: "",
  option: "",
  selectedOptions: [],
};
const SignUpContext = createContext();
const SIGNUP_STORAGE_KEY = "signup_data";

const SignUpProvider = ({ children }) => {
  const [
    { name, username, email, password, image, location, option, selectedOptions },
    signUpDispatch,
  ] = useReducer(SignUpReducer, initialState);
  
  useEffect(() => {
    const storedData = localStorage.getItem(SIGNUP_STORAGE_KEY);
    if (storedData) {
      signUpDispatch({ type: "LOAD_DATA", payload: JSON.parse(storedData) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(SIGNUP_STORAGE_KEY, JSON.stringify(name, username, email, password, image, location, option, selectedOptions));
  }, [name, username, email, password, image, location, option, selectedOptions]);

  return (
    <SignUpContext.Provider 
        value={{name, username, email, password, image, location, option, selectedOptions ,signUpDispatch}}
        >
            {children}
        </SignUpContext.Provider>
  )
};
const useSignUp = () => useContext(SignUpContext);
export {useSignUp, SignUpProvider}
