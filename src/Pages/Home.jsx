import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import News from '../Components/News';
import Search from '../Components/Search';
import {useState} from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;


const Home = ()=>{

    const [query, setQuery] = useState("");

    const baseUrl = `http://api.mediastack.com/v1/news?access_key=${API_KEY}`;

    const fetchUrl = baseUrl + `&keywords=${query}&countries=in`;
    
    
    return (
        <div className="Home">
            <Navbar />

            <Search setQuery={setQuery} />

            {/* <h1 align="center">{fetchUrl}</h1> */}

            <News url={fetchUrl} />

            
            <Footer />
        </div>
    )  
}

export default Home;