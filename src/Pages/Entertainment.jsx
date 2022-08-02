import 'dotenv/config';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import News from '../Components/News';
import Search from '../Components/Search';
import {useState} from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;


const Entertainment = ()=>{

    const [query, setQuery] = useState("");

    const baseUrl = `http://api.mediastack.com/v1/news?access_key=${API_KEY}`;
    const keywords = `&keywords=${query}`;
    const countries = `&countries=`;
    const languages = `&languages=en`;
    const categories = `&categories=entertainment`;

    const fetchUrl = baseUrl+keywords+countries+languages+categories;
    
    
    return (
        <div className="Entertainment">
            <Navbar />
            <Search setQuery={setQuery} />
            <News url={fetchUrl} />
            <Footer />
        </div>
    )  
}

export default Entertainment;