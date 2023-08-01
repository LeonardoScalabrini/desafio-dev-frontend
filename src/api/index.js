import axios from 'axios';

const { REACT_APP_SERVER } = process.env
const upload = 'api/v1/upload'
const transaction = 'api/v1/transaction'

const axiosConfig = { validateStatus: (status) => status >= 200 && status < 300 }

export const uploadCnab = async (formData) => {
    return await axios.post(`${REACT_APP_SERVER}/${upload}/cnab`, formData, axiosConfig);
}

export const getTransactions = async () => {
    return await axios.get(`${REACT_APP_SERVER}/${transaction}`);
}