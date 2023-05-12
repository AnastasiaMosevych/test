import { Article, UserAvatar, Button, Text, Followers, TextContainer, AvatarDiv } from "./TweetsCard.styled";
import logo from "../../images/logo.svg";
import { updateFollowersThunk } from "../../redux/operations";
import { useDispatch } from "react-redux";
// import { addSubscription, deleteSubscription } from "../../redux/subscriptionSlice";
import { useState } from "react";

export const TweetsCard = ({ user, avatar, tweets, followers, id }) => {
    const dispatch = useDispatch();
    const [isFollowing] = useState(false);
    // , setIsFollowing] 
    const handleOnClick = () => {
        // if (isFollowing) {
        //     dispatch(deleteSubscription());
        // } else {
        //     dispatch(addSubscription());
        //     dispatch(updateFollowersThunk({ id: id, followers: followers }));
        // }
        dispatch(updateFollowersThunk({ id: id, followers: followers }));
    }
        return (
            <Article>
                <div>
                    <img src={logo} alt="logo of go-it school" />
                </div>
                <AvatarDiv>
                    <div>
                        <UserAvatar src={avatar} alt={user} />
                    </div>
                </AvatarDiv>
                <TextContainer>
                    <Text>{tweets} Tweets</Text>
                    <Followers>{followers.toLocaleString("en-US")} Followers</Followers>
                    <Button type="button" onClick={() => handleOnClick(id)}>Follow</Button>
                </TextContainer>
            </Article>
        )
}