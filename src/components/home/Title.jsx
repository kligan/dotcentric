
function Title (props) {
    const {title, subtitle} = props;
    return (
        <>
            <div className="home-content">
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
            </div>
        </>
    )
}

export default Title;