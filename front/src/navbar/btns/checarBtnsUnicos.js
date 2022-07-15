

const checarBtnsUnicos = (navbar) => {

    let btns = navbar.state.btns;
    
    let uniq = [...new Set(btns)];

    //console.log(uniq);

    //navbar.setState({
        
    //    btns: uniq
    //});

    navbar.state.btns = uniq;
}

export default checarBtnsUnicos;