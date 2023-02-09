import styled from "styled-components";

export const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;




    > input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + span:before {
            transform: translateX(26px);
        }
    }

    > span {
        position: absolute;
        cursor: pointer;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 25px;

        background-color: pink;
        transition: 0.4s;

        &::before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: green;
            border-radius: 50%;
            transition: 0.4s;
        }
    }

    > input:checked + span {
            background-color: brown;
        }
`;
