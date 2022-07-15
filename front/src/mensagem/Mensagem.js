import React from 'react';

export default function Mensagem(props) {
  // Compra realizada com sucesso!
  //
  //const [count, setCount] = useState(0);
  //console.log("porco azul");
  //console.log(props);
  return (
    <div className="row justify-content-center mt-5">
        <p style={{color: props.props.color, fontSize: "4rem"}}> {props.props.mensagem} </p>
    </div> 
  );
}