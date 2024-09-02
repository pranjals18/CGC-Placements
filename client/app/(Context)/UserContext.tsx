import { createContext, useContext, useEffect, useState } from "react";

interface IUser {
  name: string;
  roll_no: string;
  email: string;
  gender: string;
  cgpa: Number;
  branch: string;
  phone_no: string;
  address: string;
  linkedin_url: string;
  passout_year: string;
  profile_pic: string;
  resume: string;
}

interface UserContextType {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const INITIAL_NAME = {
    name: "",
    roll_no: "",
    email: "",
    gender: "",
    cgpa: 0,
    branch: "",
    phone_no: "",
    address: "",
    linkedin_url: "",
    passout_year: "",
    profile_pic: "",
    resume: "",
  }

const INITIAL_STATE = {
  user: INITIAL_NAME,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(INITIAL_STATE);

const UserContextProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<IUser>(INITIAL_STATE.user);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;

export const useUserContext = () => useContext(UserContext);