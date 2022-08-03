import { useState, useEffect } from 'react';
import { memo } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../Styles/News.css';


const News = ({url, query}) => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const total = 200;

    const FetchNews = async () => {
        setTimeout(()=>{},1000);
        await fetch(url + `&page=${page}`)
        .then((response) => {
            return response.json();
        })
        .then((object) => {
            setData(data.concat(object.response.docs));
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    
    
    useEffect(()=>{
        setData([]);
        setPage(0);
    }, [query]);

    useEffect(() => {
        // setData([]);
        FetchNews();
    }, [url,page]);



    return (

        <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={() => setPage(page + 1)}
            hasMore={page !== total}
            loader={<h4 align='center'>Loading...</h4>}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >

            <div className="News">
                {
                    data.map((news, index) => {
                        return (
                            <NewsItem key={index}
                                image={"https://www.nytimes.com/"+news.multimedia[2]?.url}
                                title={news.headline?.main}
                                abstract={news?.abstract}
                                content={news?.lead_paragraph}
                                readMore={news?.web_url}
                            />
                        );
                    })
                }
            </div>

        </InfiniteScroll>

    );
};

export default memo(News);