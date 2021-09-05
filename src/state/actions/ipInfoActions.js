import { getCurrentUserIp } from '../../Api/api-geolocation/services';
export const GET_USER_API = 'GET_USER_API';

export const getCurrentIP = (userIP) => {
    return {
            type:GET_USER_API,
            payload:userIP
    }
}
