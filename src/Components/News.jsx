import NewsItem from './NewsItem';
import '../Styles/News.css';
import { useState, useEffect } from 'react';


const News = (props)=>{
    
    const FetchNews = async ()=>{
        await fetch(props.url)
        .then((response)=>response.json())
        .then((data)=>{
            setData(data["articles"]);
        });
    };

    const [data,setData] = useState([]);

    useEffect(()=>{
        FetchNews();
    });

    
    return (
        <div className="News">
            {  
                data.map((news,index)=>{
                    return (<NewsItem key={index} image={news["urlToImage"]} title={news["title"]} content={news["content"]} readMore={news["url"]} source={news["source"]["name"]} />);
                })   
            }
            
        </div>
    );
};

export default News;