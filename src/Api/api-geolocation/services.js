import axios from 'axios';
import { API, KEY} from './config'


const getCurrentUserIp = () => {
    const request =  axios.get(`${API}?apiKey=${KEY}`)
    return  request.then(({data}) => data);
}

const getCustomUserIp = async (customIp) => {
    const result = await axios.get(`${API}?apiKey=${KEY}&ipAddress${customIp}`)
    return result
}

export {getCurrentUserIp , getCustomUserIp}