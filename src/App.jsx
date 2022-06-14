import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import About from './pages/About'
import Inicio from './pages/Inicio'

function App() {

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={ <Inicio /> } />
                    <Route path="about" element={ <About /> } />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default App
