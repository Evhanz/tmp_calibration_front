import config from 'config';

export const validateLogin =  ()=>{
    const url = `${config.apiUrl}/api/test/user`;
    const token = window.localStorage.getItem('_token')
    let response = false;
    if(token == null){
        console.log('entro aqui')
        response =  false
    } 
    else {
        response = true;
        /*
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' , 'x-access-token': token}
        };
        
        response = await fetch(url, requestOptions)
        .then(function(res) {
            console.log(res);
            if(res.status == 'ok'){
                return true;
            } else {
                return false;
            }
        }).then(()=>{
            return false;
        })
        .catch(function() {
            return false;
        });*/
       
    }
    return response;
};

export const signIn = async (user, password)=>{

    const url = `${config.apiUrl}/auth/login`;

    const requestOptions = {
        method: 'POST',
        // mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: password })
    };
    const response = await fetch(url, requestOptions)
    .then( (response) => { 
        return response.json();
    })
    .catch(function() {
        return {token:null};
    });

    return response
   

}