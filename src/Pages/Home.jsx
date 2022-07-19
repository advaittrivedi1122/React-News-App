import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import News from '../Components/News';
import Search from '../Components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const myQuery = (searchQuery)=>{
    return searchQuery;
}



const Home = ()=>{
    // const fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&apikey=${API_KEY}`;


    const baseUrl = "https://api.mediastack.com/v1/news";

    // const fetchUrl = baseUrl 

    const requestHeader = {
        method : "GET",
        headers : {
            'X-access-key': API_KEY
        }
    };
    
    
    return (
        <div className="Home">
            <Navbar />

            <Search myQuery={myQuery} />

            

            {/* <News url={fetchUrl} requestHeader={requestHeader} /> */}

            
            <Footer />
        </div>
    )  
}

export default Home;