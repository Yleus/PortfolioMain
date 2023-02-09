import styled from "styled-components";
import { MdVerified, BsEyeglasses, AiFillHeart } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;


  width: 90%;
  max-width: 100%;
  height: 300px;
  border-radius: 6px;
  border: 1px solid rgb(230, 230, 230, 0.4);
  margin: 20px auto;

  @media (max-width: 700px) {
      display: none;
    }




`;

export const BoxLeft = styled.div`
  display: flex;
  width: 90%;
  height: 100%;
  align-items: center;
  border-radius: 10px;


`;

export const Photo = styled.div`
  display: flex;
  align-itens: center;
  flex: 0.6;
  height: 90%;

  position: relative;



  & > img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

    position: absolute;
    &:hover {
    width: 240%;
    object-fit: scale-down;
    }
  }

`;

export const Description = styled.div`

  display: flex;
  flex-direction: column;
  flex: 1;
  height: 90%;
  padding: 6px;
  justify-content: space-between;


`;

export const Site = styled.div`
  display: flex;
  width: 10%;
  height: 100%;
  background: ${props => props.theme.colors.textSecundary};
  border-radius: 0 5px 5px 0;
  align-items: center;
  justify-content: center;



  & a {
    color: ${props => props.theme.colors.primary};
    font-weight: 600;
    font-size: 1.4rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }




`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  & p {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary}
  }
`;

export const VerifiedIcon = styled(MdVerified)`
  color: #3897F0;
`;


export const By = styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Desc = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Release = styled.div`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Likes = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Visited = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Like = styled.div`
  display: flex;
  flex-direction: column;

`;

export const Looks = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const Heart = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-weight: bold;
    color: ${props => props.theme.colors.textSecundary};
  }
`;

export const VisitedIcon = styled(BsEyeglasses)`
  color: ${props => props.theme.colors.textSecundary};
  margin-right: 4px;
`;


export const HeartIcon = styled(AiFillHeart)`
  color: ${props => props.theme.colors.textSecundary};
  margin-right: 4px;
`;
