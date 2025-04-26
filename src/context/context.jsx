import { createContext, useState } from "react";


export const GlobalContext = createContext(null);

const GlobalState = ({ children }) => {

    const [openNavigation, setOpenNavigation] = useState(true);

    const resetNavigation = () => {
        setOpenNavigation(false)
    }

  return (
    <GlobalContext.Provider value={{ openNavigation, setOpenNavigation, resetNavigation }}>
        {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState 

