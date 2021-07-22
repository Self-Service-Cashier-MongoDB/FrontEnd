import axios from 'axios';
import { createOrder } from './cart';

export const createForm = (params) => {
    axios.post(process.env.REACT_APP_API_URL + "/form", params).then((res) => {
        console.info(res);
        createOrder(params);
    }).catch((err) => {
        console.error(err);
    })
}