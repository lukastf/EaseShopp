

const criarModificarRota = (navbar, route) => {

    let rotaExiste = false;
    let routes = navbar.state.routes;

    for (let i = 0; i < routes.length; i++) {

        if (
            typeof routes[i] === "undefined" || 
            routes[i] === null ||
            routes[i].props.path === route.props.path
        ) {

            routes[i] = route;

            rotaExiste = true;
        }
    }

    if (!rotaExiste) routes.push(route);

    navbar.setState({
        
        routes: routes
    });
}

export default criarModificarRota;