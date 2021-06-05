import {useState, useEffect} from 'react';
import {servicesData} from './Data'

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
    return (
        <>
            <div>
                {console.log(services)}
                {services.map(element=>{
                    return (
                        <div>
                            <p>{element.name}</p>
                            <img src={element.image}/>
                        </div>
                    )
                })}

                <h1>{servicesData.text}</h1>
            </div>
        </>
    )
}

export default Services;