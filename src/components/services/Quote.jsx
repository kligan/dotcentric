
function Quote (props){
    const{speech, quote, author} = props;
    return (
        <>
            <div className="quote">
                <img alt="speech" src={speech}/>
                <h3>{quote}</h3>
                <h6>{author}</h6>
            </div>
        </>
    )
}

export default Quote;