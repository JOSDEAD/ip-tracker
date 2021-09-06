import { getCustomUserIp } from '../../Api/api-geolocation/services';
export const GET_USER_API = 'GET_USER_API';
export const SET_CUSTOM_IP = 'SET_CUSTOM_IP'; 
export const getCurrentIP = (userIP) => {
    return {
            type:GET_USER_API,
            payload:userIP
    }
}

export const setCustomIp = (ip) => {
    return async (dispatch) => {
        const customIp = await getCustomUserIp(ip);
        dispatch({
            type:SET_CUSTOM_IP,
            payload:customIp.status === 200 && customIp.data
        })
    }
}
