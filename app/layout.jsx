import "./globals.css";
import SessionWrapper from "./session/SessionWrapper";

export const metadata = {
  title: "Optimum Roast Generator",
    description: "Get roasted by the Optimum network 🔥",
    };

    export default function RootLayout({ children }) {
      return (
          <html lang="en">
                <body className="bg-black text-white min-h-screen flex items-center justify-center text-center">
                        <SessionWrapper>{children}</SessionWrapper>
                              </body>
                                  </html>
                                    );
                                    }