
//import { faDownload, faAppleAlt, faPlay } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BaixarApp = () => {

    return (
        <div className="row col-12 mx-auto mt-4">
            <div className="col-12 text-center">
                <h1>Baixar App</h1>
            </div>
            <div className="row col-12 justify-content-center text-center">
            <div className={"justify-content-center col-12 col-md-5 mt-5 "}>
                <a href={"https://apps.apple.com/br/app/ease-shopp-ltda/id1592107480"} 
                target="_blank" rel="noopener noreferrer">
                    <img src="download-ios.png" alt="link-ios" />
                </a>
                {/*<a className="nav-link sqr" href={"https://apps.apple.com/br/app/ease-shopp-ltda/id1592107480"} target="_blank" rel="noopener noreferrer" style={{height: "19.4rem"}}>
                    <div className="miau text-center">
                        <FontAwesomeIcon className="icone-principal" icon={faAppleAlt} />
                        <p> {"App Store ( Apple - IOS )"} </p>
                    </div>
                </a>*/}
            </div>
            <div className={"justify-content-center col-12 col-md-5 mt-5 "}>
                <a href={"https://play.google.com/store/apps/details?id=br.com.easeshopp"} 
                target="_blank" rel="noopener noreferrer">
                    <img src="download-android.png" alt="link-android" />
                </a>
                {/*<a className="nav-link sqr" href={"https://play.google.com/store/apps/details?id=br.com.easeshopp"} target="_blank" rel="noopener noreferrer" style={{height: "19.4rem"}}>
                    <div className="miau text-center">
                        <FontAwesomeIcon className="icone-principal" icon={faPlay} />
                        <p> {"Play Store ( Google - Android )"} </p>
                    </div>
                </a>*/}
            </div>
            </div>
        </div>
    );
}

export default BaixarApp;