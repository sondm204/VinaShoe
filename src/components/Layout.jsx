import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Chat  from "./Chat"

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Chat />
      <main className="flex-grow bg-gray-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
