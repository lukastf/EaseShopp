

const criarModificarBtn = (navbar, btn, insertBegin) => {

    let btnExiste = false;
    let btns = navbar.state.btns;

    for (let i = 0; i < btns.length; i++) {

        //console.log(btn.props.children);

        if (
            //typeof btns[i] === "undefined" || 
            //btns[i] === null //||
            btns[i].props.children.props.to === btn.props.children.props.to
            //btns[i]
        ) {

            btns[i] = btn;

            btnExiste = true;
        }
    }

    if (!btnExiste) {

        if (insertBegin)
            btns.unshift(btn);
        else
            btns.push(btn);
    }

    navbar.state.btns = btns;

    //navbar.setState({
        
    //    btns: btns
    //});
}

export default criarModificarBtn;