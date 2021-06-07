import {useState, useEffect} from 'react';
import {servicesData} from './Data';

function Services () {
        const[services, setServices] = useState([])

    useEffect( ()=>{
        async function fetchMyAPI() {
            let response = await fetch('https://api.mocki.io/v2/561baaaa')
            response = await response.json()
            setServices(response.services)
        }
        fetchMyAPI()

    },[])

    const addDefaultSrc = (e) =>{
        e.target.src = servicesData.service
    }
    return (
        <>
            <div>
                <h1>{servicesData.text}</h1>
                <p>{servicesData.subText}</p>
                {services.map(service=>{
                    return (
                        <div key={service.id}>
                            <div>
                                <img alt="" onError={addDefaultSrc} src={service.image} style={{width: "50px"}}/>
                                <p>{service.id}</p>
                            </div>
                            <h4>{service.name}</h4>
                            <p>{service.description}</p>
                        </div>
                    )
                })}
                <hr/>
                <p>{servicesData.quote}</p>
                <h6>{servicesData.author}</h6>
                <hr/>
            </div>
        </>
    )
}

export default Services;