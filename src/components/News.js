import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default function News(props) {
  
  const cap=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [article,setArticle]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,settotalResults]=useState(0);


 const componentDidMount=()=>{
    console.log("CDM");
    setLoading(true);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`;
    console.log(props.apikey);
    document.title="NewsMonke- "+cap(props.category);
    props.setProgress(10);
    fetch(url).then((data)=>{
      return data.json()
      
    }).then((data)=>{
      props.setProgress(50);
      setArticle(data.articles);
      settotalResults(data.totalResults);
      setPage(page+1);
      setLoading(false);
      console.log("Data is ",data);
      console.log("Article length = ",article.length);
      props.setProgress(100);
    })
  }
 

  
  const fetchMoreData=()=>{
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=10`;
    setLoading(true);
    fetch(url).then((data)=>{
     return data.json()
     }).then((data)=>{
       console.log("This is Called");
       setPage(page+1);
       setArticle(article.concat(data.articles));
       console.log(data);
       console.log(article.length);
       settotalResults(data.totalResults);
       setLoading(false);
     })
    }

   useEffect(()=>{
     componentDidMount();
   },[]);
    console.log("Rendered");
    return (
      <>
       <h2 className={`text-center mb-3 `}  style={{"margin-top":"65px"}}>NewsMonkey- {cap(props.category)}</h2>
       {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length<totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
          {  article.map((element,i)=>{
            return <div className={`col-md-4 `} key={i} >
            <NewsItem Mode={props.Mode} title={element?element.title:" "} description={element?element.description:" "} url={element?element.urlToImage:" "} newsurl={element?element.url:" "} date={element?element.publishedAt:""} author={element?element.author:""}/>
            </div>
        })}
        </div>
          </div>
     
  </InfiniteScroll>
      </>
    )
 
}

News.defaultProps={
  country:'in',
  pageSize:8,
  category:'general'
}