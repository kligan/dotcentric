import {homeData} from './Data';
import './Home.css'

function Home () {
    return (
        <>
            <div className="home-content">
                <h1>{homeData.title}</h1>
                <p>{homeData.subtitle}</p>
            </div>
            <div className="home-image">
                <img src={homeData.home} />
            </div>
            <div className="banner">
                <h3>{homeData.bannerText}</h3>
                <div>
                    <button>Call Now</button>
                </div>
            </div>
        </>
    )
}

export default Home;