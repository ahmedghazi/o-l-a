"use client";
import React, { createContext, useContext, ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";

const PageContext = createContext({});

interface PageContextProps {
  // location?: object;
  children: ReactNode;
  // pageContext: object;
}

export const PageContextProvider = ({ children }: PageContextProps) => {
  // const { children } = props;
  const pathname = usePathname();
  const settings = {
    pathname,
  };

  useEffect(() => {
    // console.log(pathname);
    _format();
    window.addEventListener("resize", _format);

    return () => {
      window.removeEventListener("resize", _format);
    };
  }, [pathname]);

  const _format = () => {
    if (!document) return;

    document.documentElement.style.setProperty(
      "--app-height",
      window.innerHeight + "px"
    );

    const header = document.querySelector("header");
    if (header) {
      const headerBounding = header.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--header-height",
        headerBounding.height + "px"
      );
    }

    const footer = document.querySelector("footer");
    if (footer) {
      const footerBounding = footer.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--footer-height",
        footerBounding.height + "px"
      );
    }
  };

  return (
    <PageContext.Provider value={{ settings }}>{children}</PageContext.Provider>
  );
};

// export default PageContext;
// export { PageContext, PageContextProvider };

export const usePageContext = () => useContext(PageContext);
