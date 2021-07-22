import axios from 'axios';

export const createOrder = (params) => {
    axios.post(process.env.REACT_APP_API_URL + "/cart", params).then((res) => {
        console.info(res);
        sessionStorage.setItem("order_id", res.data.id);
    }).catch((err) => {
        console.error(err);
    })
}

export const addProductToOrder = (body) => {
    const order_id = sessionStorage.getItem("order_id");
    axios.put(process.env.REACT_APP_API_URL + "/cart/"+ order_id, body).then((res) => {
        console.info(res);
    }).catch((err) => {
        console.error(err);
    })
}
