import {homeData} from './Data';
import './home/Home.css';
import Title from './home/Title';
import Background from './home/Background';
import Banner from './home/Banner';

function Home () {
    const {title, subtitle, bannerText, home} = homeData;
    return (
        <>
           <Title {...{title,subtitle}}/>
           <Background {...{home}}/>
           <Banner {...{bannerText}}/>
        </>
    )
}

export default Home;