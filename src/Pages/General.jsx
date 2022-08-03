import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import News from '../Components/News';
import Search from '../Components/Search';
import {useState} from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;


const General = ()=>{

    const [query, setQuery] = useState("");

    const baseUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=${API_KEY}`;
    const keywords = `&q=${query}`;
    const categories = `&fq=general`;

    const fetchUrl = baseUrl+keywords+categories;
    
    
    return (
        <div className="General">
            <Navbar />
            <Search setQuery={setQuery} />
            <News url={fetchUrl} query={query} />
            <Footer />
        </div>
    )  
}

export default General;