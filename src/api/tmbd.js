import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
        Accept:"application.json"
    },
    params:{
        api_key:'34ccc898ccced5ef9cc739f24333923b'
    }
})