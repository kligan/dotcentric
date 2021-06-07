import {footerData} from '../Data';
import './Footer.css';

function Footer () {
    return (
        <>
            <div className="footer">
                <div>
                    <img alt="Footer" src={footerData.footer} />
                </div>
                <p>2021 <span>Dotcentric</span> Code Test - All rights reserved - Call 01234 432 123</p>
            </div>
        </>
    )
}

export default Footer