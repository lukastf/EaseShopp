

const getRoutes = (navbar) => {

    let routes = navbar.state.routes;
    let route = navbar.state.route;

    //console.log(routes);

    if(typeof route.props === "undefined") return routes;

    for (let i = 0; i < routes.length; i++) {
        
        if (routes[i].props.path === route.props.to) {

            return routes[i];
        }
    }
}

export default getRoutes;