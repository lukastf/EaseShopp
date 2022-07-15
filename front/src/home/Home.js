

import React from 'react';
//import ListarProdutos from '../listarProdutosBase/ListarProdutos';

class Home extends React.Component {

    componentDidMount = () => {

        let func = this.props.navbar.props.app.state.showBackTopFunc;

        func(false);

        //console.log(showBackTop);
    }

    render() {

        return(

            <div /*className="row col-12 mx-auto"*/>
                {/*<div className="col-12 text-center">
                    <h1>Home</h1>
                </div>*/}
                <div /*className="col-12 text-left"*/>
                    <img 
                        className="img-fluid" 
                        src="fundo_site2.jpg" 
                        alt="fundo_site" 
                        //style={{width: "81rem"/*, marginTop: "2rem"*/}} 
                        style={{width: "100%", height: "100%"}} 
                    />
                </div>
            </div>
        );
    }

}

export default Home;