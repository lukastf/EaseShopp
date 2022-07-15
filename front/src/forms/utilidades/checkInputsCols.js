

const checkInputsCols = (context) => {

    if (context.props.cols === null || typeof  context.props.cols === "undefined") {
        context.setState({cols: "col-md-4"});
    } else {
        context.setState({cols: context.props.cols});
    }
}

export default checkInputsCols;