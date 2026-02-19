import "./styles/tailwind.css";
import "./styles/index.scss";
import { PageContextProvider } from "./context/PageContext";
import Header from "./components/Header";
import website from "./config/website";
// const config = require("./config/website");

export const metadata = {
  metadataBase: new URL(website.url),
  title: {
    template: `%s — ${website.title}`,
  },
  description: website.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div id='page'>
          <PageContextProvider>
            <Header />
            <main>{children}</main>
          </PageContextProvider>
        </div>
      </body>
    </html>
  );
}
