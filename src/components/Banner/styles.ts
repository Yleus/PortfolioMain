import styled from "styled-components";

import { FiSearch } from '../../styles/icons'

export const Container = styled.div`
    flex-shrink: 0;

    width: 100%;

    height: min(18vw, 99px);

    background-color: #2142A6;


    display: flex;
    align-items: center;
    justify-content: center;

    > input {

        width: 60%;
        height: 50%;
        border-radius: 20px;
        outline: none;
        padding: 20px;
    }

`;


export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;

    width: 80%;
    height: 39px;
    position: relative;

    > svg {
        position: relative;
        left: 40px
    }

    @media (min-width: 499px) {
        display: none;
    }
`;
export const SearchInput = styled.input`
    background: ${props => props.theme.colors.primary};
    height: 100%;
    width: 100%;
    font-size: 1.4rem;
    padding: 0 50px 0px;
    border-radius: 20px;
    align-items: center;
    color: ${props => props.theme.colors.textPrimary};


    &::placeholder {
        color: ${props => props.theme.colors.textSecundary};
    }

`;

export const SearchIcon = styled(FiSearch)`
    width: 27px;
    height: 27px;

    color: ${props => props.theme.colors.textPrimary};


`;


// export const Avatar = styled.div`
//     width: max(45px, min(135px, 22vw));
//     height: max(45px, min(135px, 22vw));

//     border: 3px solid green;
//     blackground: grey;
//     border-radius: 50%;

//     position: absolute;
//     bottom: max(-60px, -10vw);

//     left: 15px;
// `;
