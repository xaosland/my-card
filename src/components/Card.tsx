import styled from "styled-components";
import {mytheme} from "../Theme.styled";
export const Card = styled.div`
  flex: 1;

  width: 300px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px #0000001A;
  @media ${mytheme.media.tablet} {
    width: 400px;
    box-shadow: 0px 4px 20px 5px #000;
  }
  `
export const CardLogo = styled.img`
  width: 280px;
  height: 170px;
  border-radius: 10px;
  @media ${mytheme.media.tablet} {
    width: 380px;
    box-shadow: 0px 4px 20px 5px #0000001A;
  }
`