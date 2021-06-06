import {useState, useEffect} from 'react';
import {servicesData} from './Data';
import logo from '../assets/save.png';

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
        e.target.src = logo
    }
    return (
        <>
            <div>
                {console.log(services)}
                {services.map(element=>{
                    return (
                        <div key={element.id}>
                            <p>{element.name}</p>
                            <img alt="" onError={addDefaultSrc} src={element.image} style={{width: "30px"}}/>
                        </div>
                    )
                })}

                <h1>{servicesData.text}</h1>
            </div>
        </>
    )
}

export default Services;