import * as Config from '../Contants/Config';
import axios from 'axios';

export const CallApi = (endpoint,method,body) =>{

        return axios ({
            method,
            url: `${Config.API_URL}/${endpoint}`,
            data: body
          
        }).catch( err =>{
            console.log(err);
        })
}