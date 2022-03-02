import { useNavigationState } from '@react-navigation/native'

export const useNavigationParams = () =>{
    const navState = useNavigationState(state => state)
    if(navState && navState.routes && navState.routes.length > 0 && navState.routes[navState.routes.length - 1].params){
        return navState.routes[navState.routes.length - 1].params
    }
    return {}
}