

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBorderAll,
  faListAlt
} from '@fortawesome/free-solid-svg-icons';

class ListaEstilo extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
        }
    }

    changeOrderStyle = (e) => {

      if (this.props.context.state.orderStyle === "col-md-2 cardStyle1") {
  
        this.props.context.setState({
          orderStyle: "col-md-3 cardStyle2",
          iconOrderStyle: faBorderAll,
          cardImgTopStyle: "card-img-top2"
        });
      }
  
      else if (this.props.context.state.orderStyle === "col-md-3 cardStyle2") {
  
        this.props.context.setState({
          orderStyle: "col-md-2 cardStyle1",
          iconOrderStyle: faListAlt,
          cardImgTopStyle: "card-img-top"
        });
      }
  
      this.props.changeHandler(
        this.props.context,
        this.props.context.state.categoria,
        this.props.context.state.pesquisaString,
        this.props.context.itensPage,
        this.props.context.pageId,
        this.props.context.state.sort
      );
    }

    render(){
        return(
          <div className="justify-content-end text-right col-12 col-md-2">
              <p>Estilo da Ordem:
                <FontAwesomeIcon 
                  onClick={this.changeOrderStyle} 
                  className="order-style btn text-right" 
                  icon={this.props.context.state.iconOrderStyle} 
                />
              </p>
          </div>
        );
    }
}

export default ListaEstilo;