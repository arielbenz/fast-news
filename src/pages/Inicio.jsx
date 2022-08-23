import useNews from '../hooks/useNews'

import { NEWS_CATEGORIES } from '../utils/settings'
import ListNews from '../components/ListNews'

const Inicio = () => {

    const { category, listNews, loading, handleChangeCategory } = useNews()

    return (
        <>
            <div className="py-10 text-center">
                {
                    NEWS_CATEGORIES.map( item => (
                        <button
                            key={ item.value }
                            value={ item.value }
                            className={`px-6 py-4 bg-sky-100 mx-2 cursor-pointer font-light ${category === item.value ? 'bg-sky-300 text-white' : ''} `}
                            onClick={handleChangeCategory}
                        >
                            {item.name}
                        </button>
                    ))
                }
            </div>
            
            <ListNews
                listNews={ listNews }
                loading={ loading }
            />
        </>
    )
}

export default Inicio
