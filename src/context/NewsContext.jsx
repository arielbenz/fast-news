import { useState, useEffect, createContext } from 'react';
import getNewsFromApi from '../services/getNews'

// create context
const NewsContext = createContext()

const NewsContextProvider = ({ children }) => {

    // the values that will be given to the context
    const [category, setCategory] = useState('general')
    const [listNews, setListNews] = useState([])
    const [loading, setLoading] = useState(true)

    // fetch news from API
    useEffect(() => {
        setLoading(true)

        getNewsFromApi({ category })
            .then(data => {
                setListNews(data.articles)
                setLoading(false)
            }).catch(error => {
                setLoading(false)
                console.log(error)
            })
    }, [category])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return (
        // the Provider gives access to the context to its children
        <NewsContext.Provider
            value={{
                category,
                listNews,
                loading,
                handleChangeCategory
            }}
        >
            { children }
        </NewsContext.Provider>
    )
}

export { NewsContext, NewsContextProvider }