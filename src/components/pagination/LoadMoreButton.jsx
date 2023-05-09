import { StyledButton } from "./LoadMoreButton.styled";
import { ButtonContainer } from "./LoadMoreButton.styled";

const LoadMoreButton = () => {

    const handleLoadMore = () => {

    }
    return <ButtonContainer>
            <StyledButton onClick={handleLoadMore} type="button">Load more</StyledButton>
        </ButtonContainer>
 }

export default LoadMoreButton;