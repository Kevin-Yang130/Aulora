import '@styles/globals.css';

export const metadata = {
    title: 'Aulora',
    description: 'Aulora is a platform for free copyright AI content',
}
 
const RootLayout = ({ children }) => {
  return (
    <html lang = "en">
        <body>
            <div className = "main">
                <div className = "gradient"></div>
            </div>

            <main className = "app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout