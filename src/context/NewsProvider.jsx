import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({ children }) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const searchNewsOnAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&language=en&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            
            setTotalNews(data.totalResults);
            setNews(data.articles)
        }
        searchNewsOnAPI()
    }, [category])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return (
        <NewsContext.Provider
            value={{
                category,
                news,
                totalNews,
                handleChangeCategory
            }}
        >
            { children }
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext