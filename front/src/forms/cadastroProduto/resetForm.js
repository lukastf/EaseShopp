

const resetForm = (cadastroProduto) => {

    cadastroProduto.setState({

        img: [null, null, null, null, null],
        imgValue: ["", "", "", "", ""],
        imgUrl: ["null", "null", "null", "null", "null"],
        imagensLinkExterno: [true, true, true, true, true]
    });
}

export default resetForm;