import {useState, useEffect} from 'react';
import {servicesData} from '../Data';
import './Services.css'

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
                <div className="services-content">
                    <h1>{servicesData.text}</h1>
                    <h3>{servicesData.subText}</h3>
                </div>
                <div className="services">
                {services.map(service=>{
                    return (
                        <div className="card" key={service.id}>
                            <div className="card-details">
                                <img alt="" onError={addDefaultSrc} src={service.image}/>
                                <p>{service.id}</p>
                            </div>
                            <div>
                                <h3>{service.name}</h3>
                            </div>
                            <div className="card-desc">
                                <h3>{service.description}</h3>
                            </div>
                        </div>
                    )
                })}
                </div>
                <hr/>
                <div className="quote">
                    <img alt="speech" src={servicesData.speech}/>
                    <h3>{servicesData.quote}</h3>
                    <h6>{servicesData.author}</h6>
                </div>
                <hr/>
            </div>
        </>
    )
}

export default Services;