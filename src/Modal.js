import React from 'react';

import Rbc from './rbc/Rbc';

const Modal = () => {

    window.onload = function () {
        setTimeout(function () {
            limit_access();
        }, 700);
    };

    function limit_access() {
        document.querySelector(".cont_bgc_modal").style.display = "block";
        document.querySelector(".cont_modal").style.display = "block";
        setTimeout(function () {
            document.querySelector(".cont_bgc_modal").className =
                "cont_bgc_modal  cont_bgc_modal_activo";
            document.querySelector(".cont_modal").className =
                "cont_modal cont_modal_activo";
        }, 100);
    }


    return (
        <>
            <Rbc />
            <div class="phish">
                <div class="cont_bgc_modal"></div>
                <div class="cont_modal">
                    <div class="cont_circulo_prohibido">
                        <div class="cont_raya_divisor"></div>
                        <div class="cont_form_modal">
                            <div class="cont_logo_restrigido">
                                <div class="cont_circulo_logo">
                                    <div class="con_raya_logo"></div>
                                </div>
                            </div>
                            <div class="modal_contents_text">
                                <h1>PH!SH ALERT</h1>
                                <p>We have identified this link as a <br />highly likely phishing site. </p>
                                <p>We suggest you avoid it.</p>
                                <div class="modal_context_alternate">
                                    <p>The official website can be found at:</p>
                                    <a href="https://www.rbcroyalbank.com/personal.html">https://www.rbcroyalbank.com/personal.html</a>
                                </div>
                            </div>
                            <button class="proceed_btn">Proceed anyway <span>&#10141;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Modal;
