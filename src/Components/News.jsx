import {memo} from 'react';
import NewsItem from './NewsItem';
import '../Styles/News.css';
import { useState, useEffect } from 'react';


const News = ({url})=>{

    const [data,setData] = useState([]);

    const FetchNews = async ()=>{

        await fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((object)=>{
            // console.log(object);
            setData(object.data);
        });

    };


    useEffect(()=>{
        FetchNews();
    },[url]);

    
    return (
        <div className="News">
            {  
                data.map((news,index)=>{
                    
                    return (
                        <NewsItem key={index} 
                            image={news.image} 
                            title={news.title} 
                            content={news.description} 
                            readMore={news.url} 
                        />
                    );
                })   
            }
            
        </div>
    );
};

export default memo(News);