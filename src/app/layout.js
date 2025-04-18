import "./globals.css";
import "../styles/animate.css";
import Footer from "@/components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-[#faf3dd] font-sans  flex flex-col min-h-screen'
      >
        <div className="flex-grow">
        {children }
        </div>
        <Footer className="mt-auto" />
      </body>
    </html>
  );
}
