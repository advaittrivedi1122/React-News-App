import { useState, useEffect } from 'react';
import { memo } from 'react';
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../Styles/News.css';


const News = ({ url }) => {

    const [data, setData] = useState([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(-1);
    const limit = 25;

    const FetchNews = async () => {
        await fetch(url + `&offset=${offset}`)
        .then((response) => {
            return response.json();
        })
        .then((object) => {
            console.log(object);
            setData(data.concat(object.data));
            setTotal(object.pagination.total);
        });
        
    };
    
    
    useEffect(() => {
        setData([]);
        FetchNews();
    }, [url, offset]);

    return (

        <InfiniteScroll
            dataLength={data.length} //This is important field to render the next data
            next={() => setOffset(offset + limit)}
            hasMore={data.length !== total}
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
                                image={news.image}
                                title={news.title}
                                content={news.description}
                                readMore={news.url}
                            />
                        );
                    })
                }
            </div>

        </InfiniteScroll>

    );
};

export default memo(News);