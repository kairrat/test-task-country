import { useDispatch } from 'react-redux';

import {controlReset} from './control-slice'

export const useCleanUp = () => {
    const dispatch = useDispatch();

    const clearUp  = () => {
      dispatch(controlReset())
    }

    return () => clearUp

}