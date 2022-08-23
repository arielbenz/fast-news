import { API_URL } from '../utils/settings'
import axios from 'axios';

export default function getNewsFromApi({ category = 'general', country = 'ar', language = 'es' }) {
    const url = `${API_URL}/top-headlines?country=${country}&language=${language}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
    return axios.get(url).then(res => res.data)
}