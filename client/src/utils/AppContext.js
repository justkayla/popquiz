import Cookie from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const AppProvider = (props) => {
  const [appState, setAppState] = useState({ user: null });
  const [appReady, setAppReady] = useState(false);

  const lookupUser = async () => {
    console.log("looking up user")
    const authCheck = await fetch("/api/user/lookup");
    const checkResult = await authCheck.json();
    if (checkResult && checkResult.result === "success") {
        console.log({checkResult})
        setAppState({ ...appState, user: { _id: checkResult._id, username: checkResult.username, email: checkResult.email } });
        setAppReady(true);
    } else {
      setAppReady(true);
    }
  };

  const logout = () => {
    Cookie.remove("auth-token");
    window.location.href = "/login";
  };

  useEffect(() => {
    if (!appState.user) lookupUser();
  }, [appState.user]);

  return (
    <>
      {appReady === true && (
        <AppContext.Provider value={{ appState, setAppState, logout }}>
          {props.children}
        </AppContext.Provider>
      )}
    </>
  );
};

const AppConsumer = AppContext.Consumer;
export { AppContext, AppConsumer, AppProvider };
