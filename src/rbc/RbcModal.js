import React from 'react';

import Rbc from './Rbc';

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

const RbcModal = ({analysisDone}) => {

    console.log("analysisDone? ", analysisDone);

    if (analysisDone) {
        limit_access();
    }

    return (
        <>
            <Rbc />
            <div>
                <div className="cont_bgc_modal"></div>
                <div className="cont_modal">
                    <div className="cont_circulo_prohibido">
                        <div className="cont_raya_divisor"></div>
                        <div className="cont_form_modal">
                            <div className="cont_logo_restrigido">
                                <div className="cont_circulo_logo">
                                    <div className="con_raya_logo"></div>
                                </div>
                            </div>
                            <div className="modal_contents_text">
                                <h1>PH!SH ALERT</h1>
                                <p>We have identified this link as a <br />highly likely phishing site. </p>
                                <p>We suggest you avoid it.</p>
                                <div className="modal_context_alternate">
                                    <p>The official website can be found at:</p>
                                    <a href="https://www.rbcroyalbank.com/personal.html">https://www.rbcroyalbank.com/personal.html</a>
                                </div>
                            </div>
                            <button className="proceed_btn">Proceed anyway <span>&#10141;</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default RbcModal;
