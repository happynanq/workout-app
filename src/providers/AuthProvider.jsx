import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'


export const AuthContext = createContext()

const AuthProvider = ({children})=>{
  const [isAuth, setIsAuth] = useState(!!Cookies.get("token"))
  
  return(
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider