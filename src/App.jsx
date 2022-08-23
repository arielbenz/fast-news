import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NewsContextProvider } from './context/NewsContext'

import Layout from './layout/Layout'
import About from './pages/About'
import Inicio from './pages/Inicio'

function App() {

    return (
        // Use news provider
        <NewsContextProvider>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={ <Layout /> }>
                        <Route index element={ <Inicio /> } />
                        <Route path="about" element={ <About /> } />
                    </Route>

                </Routes>
            </BrowserRouter>
        </NewsContextProvider>
    )
}

export default App
