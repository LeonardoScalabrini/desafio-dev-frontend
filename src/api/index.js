import axios from 'axios';

const { REACT_APP_SERVER } = process.env
const upload = 'api/v1/upload'
const transaction = 'api/v1/transaction'
const store = 'api/v1/store'

const axiosConfig = { validateStatus: (status) => status >= 200 && status < 300 }

export const uploadCnab = async (formData) => {
    return await axios.post(`${REACT_APP_SERVER}/${upload}/cnab`, formData, axiosConfig);
}

export const getTransactions = async (storeId) => {
    return await axios.get(`${REACT_APP_SERVER}/${transaction}?storeId=${storeId}`, axiosConfig);
}

export const getStores = async () => {
    return await axios.get(`${REACT_APP_SERVER}/${store}`, axiosConfig);
}