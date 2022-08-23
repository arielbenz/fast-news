const News = ({ news }) => {

    const { title, description, source, url, urlToImage, publishedAt } = news;

    return (
        <div className="p-5 my-5 w-full md:w-1/2 lg:w-1/3 hover:opacity-80">
            <a href={url} target="_blank">
                <img
                    className="max-h-64 object-cover h-full w-full"
                    src={ urlToImage }
                    alt={`Imagen de la noticia ${title}`}
                />
            </a>
            
            <div className="px-6 py-6 bg-slate-100">
                <div className="flex justify-between text-sm">
                    <span className="text-blue-500">{source.name}</span>
                    <span>{publishedAt}</span>
                </div>
                
                <a href={url} target="_blank" className="hover:text-blue-700">
                    <h2 className="font-bold text-xl py-8">{title}</h2>
                </a>
                <p className="h-24 overflow-hidden font-light">{description}</p>
            </div>
            
        </div>
    )
}

export default News
