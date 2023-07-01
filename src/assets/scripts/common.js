import axios from 'axios';

export async function displayPageInfo(method, url, data=[]) {
  try {
    let headers = { 'Content-Type': 'application/json' };
    if((sessionStorage.getItem("auth_token") != undefined) && (sessionStorage.getItem("auth_token") != null))
    {
      let tokenKey = "auth_token" + sessionStorage.getItem("auth_token").toString();
      let token = localStorage.getItem(tokenKey.toString())
      
      if ((token != undefined) && (token != null)) {
        headers['Custom-header'] = token.toString();
      }
    }    

    let response = await axios({
      method: method,
      url: axios.defaults.baseURL.toString() + url.toString(),
      data: data,
      headers: headers,
    });  

    if(response)
      return response.data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}