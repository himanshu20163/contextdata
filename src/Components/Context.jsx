import { createContext, useState } from "react";

export const AuthrizationContext = createContext();

function CustomProvider({ children }) {
  const [islogin, setlogin] = useState(false);
  return (
    <AuthrizationContext.Provider value={{ islogin, setlogin }}>
      {children}
    </AuthrizationContext.Provider>
  );
}

export default CustomProvider;
