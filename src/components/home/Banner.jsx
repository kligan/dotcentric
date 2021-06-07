
function Banner (props) {
    const {bannerText} = props;
    return (
        <>
            <div className="banner">
                <h3>{bannerText}</h3>
                <div>
                    <button>Call Now</button>
                </div>
            </div>
        </>
    )
}

export default Banner;