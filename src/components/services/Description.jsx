
function Description(props) {
    const {text, subText} = props;
    return (
        <>
            <div className="services-content">
                <h1>{text}</h1>
                <h3>{subText}</h3>
            </div>
        </>
    )
}

export default Description;