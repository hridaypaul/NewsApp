import React from 'react'

const NewsItem =(props)=> { 
    let { title, description, imageUrl, newsUrl, author, date ,source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
          <span className=" badge rounded-pill bg-dark" >{source} </span>
        </div>
          <img src={!imageUrl ? "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text"><small className="fw-semibold">By {!author ? " Unknown " : author} , On {new Date(date).toGMTString()}</small></p>
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}</p>

            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    ) 
}

export default NewsItem