import { useSelector } from "react-redux";
import { selectSubscription } from "../redux/selectors";

export const useSub = () => {
    return {
        subscribedUsers: useSelector(selectSubscription)
    }
}