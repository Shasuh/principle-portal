import { Provider } from "react-redux";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

// import store from "./redux/store";
// Configure Poppins font
const poppins = Poppins({
  subsets: ["latin"], // Choose the subset you need
  weight: ["400", "500", "600", "700"], // Choose font weights as required
  variable: "--font-poppins", // Define a CSS variable for the font
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen font-sans flex flex-col bg-[#f1f1f1]">
        {/* <Provider store={store}> */}
        <Navbar />
        <main className="flex-1 text-black p-3 px-6 font-sans">{children}</main>
        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
