import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import News from '../Components/News';

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = ()=>{
    const fetchUrl = `https://newsapi.org/v2/top-headlines?country=in&apikey=${API_KEY}`;
    return (
        <div className="Home">
            <Navbar />
            <News url={fetchUrl}/>
            <Footer />
        </div>
    )  
}

export default Home;