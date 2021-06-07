
function Title (props) {
    const {home} = props;
    return (
        <>
            <div className="home-image">
                <img alt="home" src={home} />
            </div>
        </>
    )
}

export default Title;