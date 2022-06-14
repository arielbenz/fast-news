import { Outlet } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from "../components/Header"

const Layout = () => {

    return (
        <>
            <Header />

            <div className="md:min-h-screen md:w-3/4 bg-slate-50 mx-auto text-center">

                <Outlet />
                
            </div>

            <Footer />
        </>
    )
}

export default Layout
