import {homeData} from './Data';
import './Home.css'

function Home () {
    return (
        <>
            <h1>{homeData.title}</h1>
            <p>{homeData.subtitle}</p>
            <div>
                <img src={homeData.home} />
            </div>
            <div className="banner">
                <p>{homeData.bannerText}</p>
                <button>Call now</button>
            </div>
        </>
    )
}

export default Home;