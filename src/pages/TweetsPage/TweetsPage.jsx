import { TweetsList } from "../../components/TweetsList/TweetsList";
import LoadMoreButton from "../../components/pagination/LoadMoreButton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPage } from "../../redux/selectors";
import { getUsersThunk } from "../../redux/operations";

const TweetsPage = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    // const isLoading = useSelector(selecIsLoading);
    useEffect(() => {
        if (page === 1) {
            dispatch(getUsersThunk(page))
        }
    })
    return (
        <div>
            <TweetsList></TweetsList>
            <LoadMoreButton></LoadMoreButton>
        </div>
    );
}

export default TweetsPage
