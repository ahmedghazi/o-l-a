import React, { ReactNode, useEffect, createContext, useContext } from "react";
import { useState } from "react";

const WrapperLocale = createContext({});

interface LocaleContextProps {
  location?: object;
  children: ReactNode;
  // pageContext: object;
}

const LocaleContext: React.FC<LocaleContextProps> = ({ children }) => {
  const [locale, dispatch] = useState("en");
  // console.log({ locale });
  //detect user lang
  useEffect(() => {
    const userLang = _detectUserLang();
    // console.log("userLang:", userLang);
    if (userLang === "fr") {
      dispatch(userLang);
    } else {
      dispatch("en");
    }
  }, []);

  const _detectUserLang = () => {
    const userLang = navigator.language;
    return userLang.toLowerCase() || "en";
  };

  return (
    <WrapperLocale.Provider value={{ locale, dispatch }}>
      {children}
    </WrapperLocale.Provider>
  );
};

// export default LocaleContext;
// export { LocaleContext, LocaleContext };
export { WrapperLocale, LocaleContext };

export default function useLocale() {
  return useContext(WrapperLocale);
}
