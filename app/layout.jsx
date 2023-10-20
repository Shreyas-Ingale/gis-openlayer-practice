
import "@styles/globals.css";

export const metadata = {
  title: "Learning GIS in Next.js",
  description: "Learning GIS in Next.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            {children}
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
