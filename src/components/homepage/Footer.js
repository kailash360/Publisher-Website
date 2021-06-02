import React from 'react'
import '../../static/css/footer.css'

function Footer(){
    return(
        <>
        <footer>
            <ul>
                <li>Subscribe to our newsletter |{'\u00A0'}</li>
                <li>Follow us on {'\u00A0'}<i class="fa fa-facebook-square">{'\u00A0'}{'\u00A0'}</i><i class="fa fa-twitter-square"></i>{'\u00A0'}{'\u00A0'}	
<i class="fa fa-instagram"></i> |{'\u00A0'}</li>
                <li>Copyright 2021</li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;