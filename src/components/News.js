import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        };
    }

    updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a9ea81e445fd4c55b6c55400987de2c3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
    }

    componentDidMount() {
        setTimeout(() => {
            console.log(this.state.page);
            this.updateNews();
        }, 0);
    }

    handlePreviousButton = () => {
        this.setState({
            page: this.state.page - 1
        });
        setTimeout(() => {
            console.log(this.state.page);
            this.updateNews();
        }, 0);
    }

    handleNextButton = () => {
        this.setState({
            page: this.state.page + 1
        });
        setTimeout(() => {
            console.log(this.state.page);
            this.updateNews();
        }, 0);
    }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: "30px 0px" }}>NewsMonkey Top HeadLines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div key={element.url} className="col-md-4 d-flex justify-content-center">
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://st4.depositphotos.com/17828278/24401/v/600/depositphotos_244011872-stock-illustration-image-vector-symbol-missing-available.jpg"} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between" style={{ margin: "10px 0px" }}>
                    <button type="button" className="btn btn-dark" onClick={this.handlePreviousButton} disabled={this.state.page <= 1}>	&larr; Previous </button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextButton} disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)}> Next &rarr; </button>
                </div>
            </div>
        )
    }
}

export default News