
import { useDispatch,useSelector } from "react-redux";
import { selectRegion, setRegion } from "./control-slice";

export const useRegion =  () => {
    const dispatch = useDispatch();
    const region = useSelector(selectRegion)
  
    const handleRegion = (reg) => { 
      dispatch(setRegion(reg?.value || ''))
  
    }

    return [region,handleRegion]

}