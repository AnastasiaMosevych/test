import { TweetsList } from "../../components/TweetsList/TweetsList";
import LoadMoreButton from "../../components/pagination/LoadMoreButton";

const TweetsPage = () => {
    return (
        <div>
            <TweetsList></TweetsList>
            <LoadMoreButton></LoadMoreButton>
        </div>
     
    );
}

export default TweetsPage
