import axios from 'axios';
import { serverUrl } from '../config';
import setRoute from './routes/setRoute';
import routes from './routes/routes';

export const redirectParceiroBaseUrl = (navbar, urlStr) => {

  let arr = navbar.props.app.state.url.split("/");
  let _id = arr.slice(-1)[0];
  let urlName = arr[3];

  if (urlName === urlStr) {

    axios.get(serverUrl + "/parceiros/" + _id)
    .then((response) => {
    
      response.data._idParceiroSession = navbar.props.app.state._id;
    
      setRoute(navbar, "/"+urlStr+"/"+_id);
      routes(navbar, response.data, "/"+urlStr);
      
    }).catch((error) => {
      
      console.log(error);
      
    });
  }
}

export const redirectParceiroBaseId = (navbar, _id, urlStr) => {

  axios.get(serverUrl + "/parceiros/" + _id)
  .then((response) => {

    response.data._idParceiroSession = navbar.props.app.state._id;

    setRoute(navbar, "/"+urlStr+"/"+_id);
    routes(navbar, response.data, "/"+urlStr);

  }).catch((error) => {

    console.log(error);

  });
}