import styled from '@emotion/styled';

export const Section = styled.section`
    display: block;
`

export const ListContainer = styled.div`
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
`

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    list-style: none;
    padding: 0;
    margin: 0;
`

export const ListItem = styled.li`
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