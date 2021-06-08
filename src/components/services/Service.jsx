
function Service (props){
    const {services, addDefaultSrc}= props;
    return(
        <>
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
        </>
    )
}

export default Service;