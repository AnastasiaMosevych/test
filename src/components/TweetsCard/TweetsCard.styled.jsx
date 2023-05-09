import styled from '@emotion/styled';
import background from "../../images/background-image.png";

export const Article = styled.article`
    width: 380px;
    height: 460px;
    padding: 28px 36px;
    background: url("${background}"), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-repeat: no-repeat;
    background-position: top center;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;    
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const UserAvatar = styled.img`
    width: 62px;
    height: 62px;
    margin-top: 178px;
`

export const Button = styled.button`
    width: 196px;
    height: 50px;
    padding: 14px 28px;
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

export const Text = styled.p`
    padding-top: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
    color: #EBD8FF;
`

export const Followers = styled.p`
    margin-top: 16px;
    margin-bottom: 26px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    text-transform: uppercase;
    text-align: center;
    color: #EBD8FF;
`