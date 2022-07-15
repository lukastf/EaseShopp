import React, { useState } from 'react';
import $ from 'jquery/dist/jquery.js';
import './CookieConsent.css';
import setRoute from '../navbar/routes/setRoute';
import routes from '../navbar/routes/routes';

function CookieConsent(props) {

  const [pageMount, setPageMount] = useState(false);

  if (!pageMount) {

    setPageMount(true);

    if (Storage === "undefined" || localStorage.cookieConsent !== "true") {

      $(document).ready(function() {
        setTimeout(function () {
          $("#cookieConsent, #telaFundo").fadeIn(200);
        }, 4000);
        $("#closeCookieConsent, .cookieConsentOK").click(function() {
          $("#cookieConsent, #telaFundo").fadeOut(200);
          localStorage.cookieConsent = "true";
        });
      });
    }
  }

  const politicaCookies = (e) => {
    e.preventDefault();

    $("#cookieConsent, #telaFundo").fadeOut(200);

    setRoute(props.navbar, "/politica-de-cookies-easeshopp");
    routes(props.navbar, "", "/politica-de-cookies-easeshopp");
  }

  return (
    <div id="telaFundo">
      <div id="cookieConsent">
        {/*<div id="closeCookieConsent">x</div>*/}
        <p>Este site utiliza cookies estritamente necessários para navegação e cookies de desempenho, 
        funcionalidade e personalização para oferecer a você uma experiência responsiva e personalizada.
        Caso continue a navegar nesta plataforma, entendemos que você está de acordo com a utilização destes cookies. 
        Para saber mais, acesse nossa <button className="btn btn-link" onClick={politicaCookies}>Política de Cookies </button> </p>
        <button className="btn cookieConsentOK">Entendi</button>
      </div>
    </div>
  );
}

export default CookieConsent;