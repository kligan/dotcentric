import {footerData} from './Data';
import './footer/Footer.css';

function Footer () {
    return (
        <>
            <div className="footer">
                <div>
                    <img alt="Footer" src={footerData.footer} />
                </div>
                <p>2021 <a href='https://www.dotcentric.co.uk/' rel="noreferrer" target='_blank'><span>Dotcentric</span></a>Code Test - All rights reserved - Call 01234 432 123</p>
            </div>
        </>
    )
}

export default Footer