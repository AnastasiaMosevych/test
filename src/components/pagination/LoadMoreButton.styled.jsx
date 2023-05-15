import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`

export const StyledButton = styled.button`
    width: 196px;
    height: 50px;
    padding: 14px 28px;
    margin-top: 20px;
    margin-bottom: 36px;
    background: #EBD8FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border: none;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
    color: #373737;
    cursor: pointer;
    &: hover {
        background-color:  #5CD3A8;
    } 
`