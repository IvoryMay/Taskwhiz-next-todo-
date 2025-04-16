import "./globals.css";
import "../styles/animate.css";
import Head from "next/head";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-[#faf3dd] font-sans   container'
      >
        <Head>
        <title>TaskWhiz - Manage Your Tasks Effortlessly</title>
        <meta name="description" content="Stay organized with TaskWhiz, the ultimate to-do app! Create, delete, and mark tasks as done to boost productivity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/no-task.jpeg" />
        </Head>
        {children}
      </body>
    </html>
  );
}
