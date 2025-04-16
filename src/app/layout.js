import "./globals.css";
import "../styles/animate.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-[#faf3dd] font-sans   container'
      >
        {children}
      </body>
    </html>
  );
}
