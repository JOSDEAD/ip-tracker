import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { getCurrentUserIp } from "../Api/api-geolocation/services";
import { getCurrentIP } from "../state/actions/ipInfoActions";

export const useUserIP = () => {
    const [userIp,setUserIp] = useState(JSON.parse(localStorage.getItem("user")));
    const dispatch = useDispatch();
    useEffect(()=>{
        // Be sure to call the api just when needed.
        if(!userIp){
        getCurrentUserIp()
        .then(data => {
            localStorage.setItem('user', JSON.stringify({...data}))
            setUserIp({...data})
            dispatch(getCurrentIP({...data}))
        })
    }else {
        dispatch(getCurrentIP({...userIp}))
    }
    },[userIp,dispatch])
    return userIp;
}
