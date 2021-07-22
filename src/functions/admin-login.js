import axios from 'axios';

export const login = (params) => {
    axios.post(process.env.REACT_APP_API_URL + "/login", params).then((res) => {
        console.info(res);

        sessionStorage.setItem("user_token", res.data.token);
        window.location.reload();
    }).catch((err) => {
        console.error(err);
    })
}