import { useDispatch,useSelector } from "react-redux";
import { selectSearch, setSearch } from "./control-slice";
export const useSearch =  () => {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch)
  
    const handleSearch = (e) => {
      dispatch(setSearch(e.target.value))
    }
    return [search,handleSearch]
}