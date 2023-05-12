import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "./LoadMoreButton.styled";
import { ButtonContainer } from "./LoadMoreButton.styled";
import { getUsersThunk } from "../../redux/operations";
import { selectPage } from "../../redux/selectors";

const LoadMoreButton = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const handleLoadMore = () => {
        dispatch(getUsersThunk(page))
    }
    return <ButtonContainer>
            <StyledButton onClick={handleLoadMore} type="button">Load more</StyledButton>
        </ButtonContainer>
 }

export default LoadMoreButton;