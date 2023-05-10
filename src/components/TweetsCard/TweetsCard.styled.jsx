import styled from '@emotion/styled';
import background from "../../images/background-image.png";

export const Article = styled.article`
    width: 380px;
    height: 460px;
    position: relative;
    padding: 28px 36px;
    background: url("${background}"), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
    background-repeat: no-repeat;
    background-position: top center;
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;  
    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 10%;
        right: 0;
        width: 380px;
        height: 8px;
        background: #EBD8FF;
        box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), 
        inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
    }  
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 36px;
    width: calc(100% - 72px);
    height: calc(50% - 98px);
`

export const AvatarDiv = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(235, 216, 255);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 4.39163px 4.39163px, rgb(174, 123, 227) 0px -2.19582px 4.39163px inset, rgb(251, 248, 255) 0px 4.39163px 3.29372px inset;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 99;    
`

export const AvatarContainer = styled.div`
    width: 62px;
    height: 62px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`

export const UserAvatar = styled.img`
    width: 62px;
    height: 62px;
    border-radius: 50%;
    object-fit: cover;
    color: transparent;
    text-indent: 10000px;
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