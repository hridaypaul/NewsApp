import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { Spinner } from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsApp`;
  }

  async updateNews() {
    this.props.setProgress(5);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true }) 
    let data = await fetch(url);
    this.props.setProgress(70);
    let parsedData = await data.json(); 
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => { 
     this.setState({page:this.state.page + 1})
     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}` 
     
     let data = await fetch(url);
     let parsedData = await data.json(); 
     this.setState({
       articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults,
       loading: false  
      }); 
      this.setState({ loading: false })
 
  };
  render() {
    return (
      <>
        <h2 className='text-center'>NewsApp - Top {this.capitalizeFirstLetter(this.props.category)} Category News</h2>
        {this.state.loading && <Spinner />} 
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData} 
          hasMore={this.state.articles.length !==this.state.totalResults} 
          loader={<Spinner/>}
          >

        <div className='container'>

          <div className='row'>
            {this.state.articles.map((element) => {
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
}

export default News