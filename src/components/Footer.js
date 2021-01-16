import React, {Fragment} from 'react';
import { Image } from 'react-bootstrap';
import facebook from '../img/icons/icon_fb.png';
import twitter from '../img/icons/icon_tw.png';
import link from '../img/icons/icon_in.png';
import contact from '../img/icons/icon_ms.png';
import './styles/Footer.scss';

const Footer = () => {
  
  return(
    <Fragment>
      {/* -- FOOTER -- */}
      <footer id="foot-sec">
        <div className="footerdivide">
        </div>
        <div className="container ">
          <div className="row">
            <div className="text-center color-white col-sm-12 col-lg-12">
              <ul className="social-icons">
                <li className="fa-spin"><a href="#/"><Image src={facebook}/></a></li>
                <li className="fa-spin"><a href="#/"><Image src={link}/></a></li>
                <li className="fa-spin"><a href="#/"><Image src={twitter}/></a></li>
                <li className="fa-spin"><a href="#/"><Image src={contact}/></a></li>
                {/* <li className="fa-spin"><a href="#/"><i class="fa fa-pinterest"></i></a></li> */}
              </ul>
              <p>
                © 2021 Samplhes. All rights reserved. Designed by JonathanFAB.com
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;