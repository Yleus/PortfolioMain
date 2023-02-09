import styled from "styled-components";

export const Container = styled.div`
    width: max(32px, min(40px, 18vw));
    height: max(32px, min(40px, 18vw));
    background: ${props => props.theme.colors.border};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    > h6 {
        color: ${props => props.theme.colors.textPrimary};
    }



`;
