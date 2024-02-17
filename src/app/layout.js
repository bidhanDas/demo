import NextTopLoader from 'nextjs-toploader'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#E60000" height={2} speed={200}></NextTopLoader>
        {children}
      </body>
    </html>
  )
}
