import {useState, useEffect} from 'react';
import {servicesData} from './Data';
import './services/Services.css';
import Description from './services/Description';
import Service from './services/Service';
import Quote from './services/Quote';
import FetchAPI from './FetchAPI';

function Services () {
        const[services, setServices] = useState([]);
        const {text, subText, speech, quote, author} = servicesData;

    useEffect( ()=>{
        FetchAPI('https://api.mocki.io/v2/561baaaa')
            .then((response)=>setServices(response.services))
            .catch((error) => {
                console.log(error)
            });
    },[])

    const addDefaultSrc = (e) =>{
        e.target.src = servicesData.service;
    }
    return (
        <>
            <div>
                <Description {...{text, subText}} />
                <Service {...{services, addDefaultSrc}} />
                <hr/>
                    <Quote {...{speech, quote, author}} />
                <hr/>
            </div>
        </>
    )
}

export default Services;