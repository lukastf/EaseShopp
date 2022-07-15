import React from 'react';

const switchBtnBase = (setHideFunc, hideState, textBtnHide, textBtnShow) => {

    const hideShowClick = () => {

        let faustao = "d-none";

        if (hideState === "d-none") 
            faustao = "";

        setHideFunc(faustao);
    }

    let btnClass = "danger";
    let text = textBtnHide;

    if (hideState === "d-none") {

        btnClass = "success";
        text = textBtnShow;
    }

    return (
        <button 
            className={"btn btn-" + btnClass +" mb-3"} 
            type="button" 
            onClick={hideShowClick}>
                {text}
        </button>
    );
}

export default switchBtnBase;