import { createContext, useContext, useState } from "react";

const LoginModeContext = createContext({
  LoginMode: "",
  toggleLoginMode: () => {},
});

export default LoginModeContext;

export function LoginContextProvider({ children }) {
  const [LoginMode, setLoginMode] = useState("");

  function toggleLoginMode() {
    setLoginMode(function (oldLoginMode) {
      if (oldLoginMode === "") {
        return "Usuario o contraseña incorrecta";
      } else {
        return "Usuario o contraseña correcta";
      }
    });
  }
  const value = {
    LoginMode,
    toggleLoginMode,
  };
  return (
    <LoginModeContext.Provider value={value}>
      {children}
    </LoginModeContext.Provider>
  );
}

export function useLoginModeContext() {
  return useContext(LoginModeContext);
}
