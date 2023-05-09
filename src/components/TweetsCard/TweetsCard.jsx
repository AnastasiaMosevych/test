import { Article, UserAvatar, Button, Text, Followers, TextContainer } from "./TweetsCard.styled";
import logo from "../../images/logo.svg";
import { updateFollowersThunk } from "../../redux/operations";
import { useDispatch } from "react-redux";

export const TweetsCard = ({ avatar, tweets, followers, id }) => {
    const dispatch = useDispatch();
    const handleOnClick = () => {
        dispatch(updateFollowersThunk({ id: id, followers: followers }));
    }
    return (
        <Article>
            <div>
                <img src={logo} alt="logo of go-it school"/>
            </div>
            <TextContainer>
                <UserAvatar src={avatar} alt="user"/>
                <div>
                    <Text>{tweets} Tweets</Text>
                    <Followers>{followers} Followers</Followers>
                    <Button type="button" onClick={() => handleOnClick(id)}>Follow</Button>
                </div>
            </TextContainer>
        </Article>
    )
}