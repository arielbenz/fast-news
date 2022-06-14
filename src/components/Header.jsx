import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="text-center">
            <div className="w-3/4 mx-auto h-40 py-10">
                <Link
                    className='font-black text-4xl block hover:text-blue-500'
                    to="/">Fast News</Link>
            </div>
        </div>
    )
}

export default Header
