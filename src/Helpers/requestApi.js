import config from 'config';
import { navigate } from "@reach/router"

export const apiGet = (url, options)=>{
    const token = window.localStorage.getItem('_token')
    if(token == null){
        return false
    } 
    else {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' , 'x-access-token': token}
        };
        
        fetch(url, requestOptions)
        .then(function(response) {
            if(response.status == 'ok'){
                return true;
            } else {
                return false;
            }
        }).catch(function() {
            return false;
        });   
    }
};