import { Outlet } from 'react-router-dom'
import Header from '../component/Header.jsx'
import Footer from '../component/Footer.jsx'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout