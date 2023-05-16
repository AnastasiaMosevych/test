import { Article, Logo, UserAvatar, ToSubscribeButton, SubscribedButton, Text, Followers, TextContainer, AvatarDiv } from "./TweetsCard.styled";
import logo from "../../images/logo.svg";
import { updateFollowersThunk } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { addSubscription, deleteSubscription } from "../../redux/subscriptionSlice";
import { useSub } from "../../Hook/useSub";

export const TweetsCard = ({ user, avatar, tweets, followers, id }) => {
    const dispatch = useDispatch();
    const { subscribedUsers } = useSub(); 
    const handleOnClick = () => {
        dispatch(updateFollowersThunk({ id: id, followers: followers + 1 }));
        dispatch(addSubscription(id));
    }

    const handleUnfollow = () => {
        dispatch(updateFollowersThunk({ id: id, followers: (followers - 1) }));
        dispatch(deleteSubscription(id));
    }
        return (
            <Article>
                <Logo src={logo} alt="logo of go-it school" />
                <AvatarDiv>
                    <div>
                        <UserAvatar src={avatar} alt={user} />
                    </div>
                </AvatarDiv>
                <TextContainer>
                    <Text>{tweets} Tweets</Text>
                    <Followers>{followers.toLocaleString("en-US")} Followers</Followers>
                    {subscribedUsers.includes(id) ?
                        <SubscribedButton type="button" onClick={() => handleUnfollow(id)}>Following</SubscribedButton>
                        : <ToSubscribeButton type="button" onClick={() => handleOnClick(id)}>Follow</ToSubscribeButton>}
                </TextContainer>
            </Article>
        )
}