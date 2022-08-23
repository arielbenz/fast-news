import { useContext } from 'react';
import { NewsContext } from '../context/NewsContext';

const useNews = () => {
    // get the context
    return useContext(NewsContext)
}

export default useNews