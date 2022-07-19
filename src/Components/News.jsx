import {memo} from 'react';
import NewsItem from './NewsItem';
import '../Styles/News.css';
import { useState, useEffect } from 'react';


const News = ({url, requestHeader})=>{

    const [data,setData] = useState([]);

    const FetchNews = async ()=>{

        await fetch(url, requestHeader)
        .then((response)=>{
            return response.json();
        })
        .then((object)=>{
            // console.log(object);
            setData(object.value);
        });

    };


    useEffect(()=>{
        // FetchNews();
    },[]);

    
    return (
        <div className="News">
            {  
                data.map((news,index)=>{
                    // console.log(news.image.thumbnail);
                    return (
                    <NewsItem key={index} 
                    image={news.image.thumbnail.contentUrl} 
                    title={news.name} 
                    content={news.description} 
                    readMore={news.url} />
                    );
                })   
            }
            
        </div>
    );
};

export default memo(News);