import News from './News'
import Spinner from './Spinner'

const ListNews = ({ listNews, loading }) => {

    return (

        loading ? <Spinner /> : (
            <div className='flex flex-wrap py-10'>
                {
                    listNews.map(news => (
                        <News
                            key={ news.url }
                            news={ news } />
                    ))
                }
            </div>
        )
    )
}

export default ListNews
