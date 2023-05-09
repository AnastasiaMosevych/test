import { useSelector } from "react-redux";
import { selectUsers, selecIsLoading, selectIsUpdating, selectPage, selectLoadMore } from "../redux/selectors";

export const useUsers = () => {
    return {
        users: useSelector(selectUsers),
        isLoading: useSelector(selecIsLoading),
        isUpdating: useSelector(selectIsUpdating),
        page: useSelector(selectPage),
        loadMore: useSelector(selectLoadMore),
    }
}