import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, url, author, date,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex", justifyContent : "end", position : "absolute" , right : "0"}}><span className=" badge rounded-pill bg-danger" >{source}</span></div>
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text" style={{ marginBottom: "0px" }}><small className="text-muted">{author ? author : "Unknown"}</small></p>
            <p className="card-text" style={{ marginTop: "0px" }}><small className="text-muted">{new Date(date).toGMTString()}</small></p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem