import axios from 'axios';

/*
// real api example
const userRequest = axios.create({
    baseURL: 'http://localhost/rockci_3_stock/index.php/test/sign_in',

    // CORS must open
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'  },
    withCredentials: false,
});

const apiUserSignIn = function(data){

    return new Promise((resolve, reject) => {

        userRequest.post('/sign_in', data)
        .then(function (response) {

            // console.log(response);
            resolve(response.data);

        }).catch(function (error) {

            reject({
                'state' : error
            });
        });
    });
}
*/

// fake api for test
const apiUserSignIn = function(data){

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            if(data.email == 'demo8888@gmail.com' && data.password == '88888888'){

                let fake_token = 'c41c0e174e17512fc51c43338649a526';

                resolve({
                    'state' : 'success',
                    'token' : fake_token
                });

            }else{

                reject({
                    'state' : 'email or password is error'
                });
            }
      
        }, 1000);
    });
}

export { apiUserSignIn }