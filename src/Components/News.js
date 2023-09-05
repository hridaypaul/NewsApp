import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = `${this.capitalizeFirstLetter(props.category)} - NewsApp`;
 
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
   

 const updateNews = async ()=> {
    props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json(); 
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [])
  
  const fetchMoreData = async () => {  
    setPage(page+1)
     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}` 
     let data = await fetch(url);
     let parsedData = await data.json(); 
     setArticles(articles.concat(parsedData.articles))
     setTotalResults(parsedData.totalResults)
       
  }; 
    return (
      <>
        <div className='container mt-5'>
        <h2 className='text-center '>NewsApp - Top {capitalizeFirstLetter(props.category)} Category News</h2></div>
        {loading && <Spinner />} 
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData} 
          hasMore={articles.length !==totalResults} 
          loader={<Spinner/>}
          >

        <div className='container'>

          <div className='row'>
            {articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 150) : ""} description={element.description ? element.description.slice(0, 200) : "" || !element.description ? "No descriptiion available" : element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>

        </div>
       </InfiniteScroll>
         
      </>
    )
}
News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News