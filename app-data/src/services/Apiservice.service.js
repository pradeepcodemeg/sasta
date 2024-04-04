import http from "./http-common";
import {  API_URL    } from './Apiurl';
import axios from "axios";



class ApiDataService {

    Getapi(url) {
        let newurl = API_URL+url;
        return http.get(newurl);
    }
    Deleteapi(url) {
        let newurl = API_URL+url;
        return http.delete(newurl);
    }

    Postapi(url,data) {
        let newurl = API_URL+url;
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        };
        return http.post(newurl, data,config);
    }

    Uploadapi(url,data) {
        let newurl = API_URL+url;
        let postData = data;
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        };
      
        return  axios.post(newurl,postData, config);
    }

    checkpaipost(url,data){
        let newurl = url;
        let postData = data;
        let config = {
            headers: {
                'x-api-key': 'c76a886745d31b3fc29dee2e51df0075',
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*'
            }
        };
      
        return  axios.post(newurl,postData, config);
    }
  
}

export default new ApiDataService();