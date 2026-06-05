import "./globals.css";
import RootLayoutClient from "./layout-client";

export const metadata = {
  title: "MUDRA",
  description: "Predictable staking & Web3 financial ecosystem for VELT token.",
  icons: {
    icon: "/favicon.png",  
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body suppressHydrationWarning>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
