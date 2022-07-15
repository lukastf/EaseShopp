
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import checkValidVar from '../utilidades/checkValidVar';

class InputImagem extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            error: "",
            classError: ""
        }

        this.linkExterno = this.props.context.state.linkExterno;
        this.imgUrl = this.props.context.state.imgUrl;
        this.imagemId = this.props.imagemId;

        this.imgValue = this.props.context.state.imgValue;
        this.img = this.props.context.state.img;
    }

    changeHandlerLinkExterno = (e) => {

        let value = e.target.value;

        for (let i = 0; i < this.imgUrl.length; i++) {

            if (this.imagemId === i) {

                this.linkExterno[i] = value;
                this.imgUrl[i] = value;
            }
        }

        this.props.context.setState({

            linkExterno: this.linkExterno,
            imgUrl: this.imgUrl
        });
    }

    changeHandlerImagem = (e) => {

        for (let i = 0; i < this.imgUrl.length; i++) {

            if (this.imagemId === i) {

                this.imgValue[i] = e.target.value;
                this.img[i] = e.target.files[0];
                this.imgUrl[i] = URL.createObjectURL(e.target.files[0]);
                this.linkExterno[i] = "";
            }
        }

        this.props.context.setState({

            imgValue: this.imgValue,
            img: this.img,
            imgUrl: this.imgUrl,
            linkExterno: this.linkExterno
        });
    }

    remover = () => {

        for (let i = 0; i < this.imgUrl.length; i++) {

            if (this.imagemId === i) {

                this.imgValue[i] = "";
                this.img[i] = null;
                this.imgUrl[i] = null;
                this.linkExterno[i] = "";
            }
        }

        this.props.context.setState({

            imgValue: this.imgValue,
            img: this.img,
            imgUrl: this.imgUrl,
            linkExterno: this.linkExterno
        });
    }

    btnRemove = () => {

        let img = this.props.context.state.imgUrl[this.props.imagemId];

        if (checkValidVar(img)) 
        return (
            <button 
                type="button" 
                onClick={this.remover} 
                className={" btn btn-danger btn-lg btn-block"}>
                    Remover <FontAwesomeIcon icon={faTrash} />
            </button>
        );
        
        return "";
    }

    render(){
        return(
            <div className="col-md-2 mt-3">

                <input 
                    type="text" 
                    className="form-control" 
                    id={"linkExterno" + this.props.imagemId} 
                    placeholder="Link Externo .png .jpg .jpeg"
                    onChange={this.changeHandlerLinkExterno} 
                    value={this.props.context.state.linkExterno[this.props.imagemId]} 
                    required 
                />

                <input 
                    type="file" 
                    className={"form-control " + this.state.classError} 
                    id={"imagem" + this.props.imagemId}
                    onChange={this.changeHandlerImagem} 
                    value={this.props.context.state.imgValue[this.props.imagemId]} 
                    required 
                />
                {this.state.error}

                <img 
                    className="img-fluid" 
                    src={this.props.context.state.imgUrl[this.props.imagemId]} 
                    alt=""
                />

                {this.btnRemove()}
            </div>
        );
    }
}

export default InputImagem;