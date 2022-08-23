import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from "../components/Header"

const Layout = () => {

    return (
        <>
            <Header />

            <div className="bg-slate-50">
                <div className="md:min-h-screen md:w-3/4 mx-auto">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Layout
