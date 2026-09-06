import Footer from './Footer'
import Navbar from './Navbar'
import Chatbot from './Chatbot'

export default function Layout({ children }) {
  return (
    <div className="site-layout">
      <Navbar />
      <main id="main-content">{children}</main>
      <Chatbot />
      <Footer />
    </div>
  )
}
