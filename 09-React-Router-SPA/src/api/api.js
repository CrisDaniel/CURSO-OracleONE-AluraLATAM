import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
};