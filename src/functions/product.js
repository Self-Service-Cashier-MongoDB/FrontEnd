import axios from 'axios';

export const getAllProducts = async () => {
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL + "/product");
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

export const createProduct = (params) => {
    axios.post(process.env.REACT_APP_API_URL + "/product", params).then((res) => {
        console.info(res);
        //window.location.reload();
    }).catch((err) => {
        console.error(err);
    })
}

export const getProductbyCode = async (kode_barang) => {
    try {
        const res = await axios.get(process.env.REACT_APP_API_URL + "/product/" + kode_barang);
        console.log(res)
        return res.data;
    } catch (err) {
        console.error(err);
    }
}
