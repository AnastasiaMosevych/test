import { List, ListContainer, Section } from "./TweetsList.styled";
import { TweetsCard } from "../TweetsCard/TweetsCard";
// import { useDispatch } from "react-redux";
import { useUsers } from "../../Hook/useUsers";

export const TweetsList = () => {
    // const dispatch = useDispatch();
    const { users} = useUsers();
    
    return (
        <Section>
            <ListContainer>
                <List>
                    
                    {users && users.map((user => (
                        <li key={user.id}>
                            <TweetsCard
                                user={user.user}
                                id={user.id}
                                avatar={user.avatar}
                                tweets={user.tweets}
                                followers={user.followers}
                            ></TweetsCard>
                        </li>
                    )))}
                </List>
            </ListContainer>
        </Section>
    )
}