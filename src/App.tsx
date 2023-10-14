import React from 'react';
import styled, {css} from "styled-components";
import {Card, CardLogo} from "./components/Card";
import {mytheme} from "./Theme.styled";
import {column} from "stylis";

function App() {

    return (
        <Box>
            <HeaderTitle><Title><CardTitle value={"Мвои милые медузки"}/> </Title></HeaderTitle>

            <BoxWrapper>
                <BoxWrapperCard>
                    <Card>
                        <CardWrapper>
                            <CardLogo src="/1.jpg"/><Title><CardTitle value={"Ушастая аурелия"}/> </Title><Text>ша́стая
                            ауре́лия, или ушастая медуза — вид сцифоидных из отряда дискомедуз. Населяет прибрежные воды
                            морей умеренного и тропического поясов, в том числе — Чёрное и Средиземное моря.</Text>
                            <WrapperBtn><Button bgcolor={"black"}>See more</Button> <Button>Save</Button></WrapperBtn>
                        </CardWrapper>
                    </Card>
                    &nbsp;&nbsp;&nbsp;
                    <Card> <CardWrapper><CardLogo src="/2.jpg"/><Title><CardTitle
                        value={"Волосистая цианея"}/></Title><Text>Волосистая цианея — вид сцифоидных из отряда
                        дискомедуз.
                        В стадии медузы достигает крупных размеров. Распространены во всех северных морях Атлантического
                        и
                        Тихого океанов, встречаются в поверхностных слоях воды вблизи берегов.</Text>
                        <WrapperBtn><Button btnType={"moreBtn"} active bgcolor={"black"}>See more</Button>
                            <Button btnType={"moreBtn"} active
                                    bgcolor={mytheme.colors.primary}>Save</Button></WrapperBtn>
                    </CardWrapper> </Card>
                    &nbsp;&nbsp;&nbsp;
                    <Card> <CardWrapper><CardLogo src="/3.jpg"/><Title><CardTitle value={"Сцифоидные"}/></Title><Text>Scyphozoa
                        — исключительно морской класс типа Cnidaria, именуемый настоящими медузами. Название класса
                        Scyphozoa происходит от греческого слова skyphos, обозначающего своего рода чашу для питья и
                        намекающую на чашеобразную форму организма. Сцифозои существовали с самого раннего кембрия до
                        наших дней.</Text>
                        <WrapperBtn><Button btnType={"moreBtn"} active bgcolor={mytheme.colors.primary}>See
                            more</Button> <Button btnType={"saveBtn"}><a href={"hee"}>Save</a></Button></WrapperBtn>
                    </CardWrapper> </Card>
                </BoxWrapperCard>
            </BoxWrapper>
        </Box>
    );
}

export default App;
type CardTitle = {
    value: string
}

function CardTitle(props: CardTitle) {
    return (
        <>Hello {props.value} </>
    )
}

const HeaderTitle = styled.div`
  padding: 100px;
`
const CardWrapper = styled.div`
  padding: 10px
`
const BoxWrapperCard = styled.div`
  display: flex;
  align-items: flex-start;
  @media ${mytheme.media.tablet} {
    flex-direction: column;
`
const Box = styled.div`
  background-color: ${mytheme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

`
const BoxWrapper = styled.div`
  align-items: center;
  margin-bottom: 100px;

`
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  padding: 20px;
`
const Text = styled.div`
  color: #ABB3BA;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
`
const WrapperBtn = styled.div`
  margin-top: 19px;
  margin-left: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 12px;
`


type ButtonPropsType = {
    bgcolor?: string
    colorText?: string
    borderClr?: string
    btnType?: "moreBtn" | "saveBtn"
    active?: boolean
}
const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  border: none;


  ${props => props.btnType === "moreBtn" && css<ButtonPropsType>`
    background-color: ${props => props.bgcolor || "#4E71FE"};
    color: ${props => props.colorText || "white"};

    &:hover {
      background-color: pink;
    }
  `}


  ${props => props.btnType === "saveBtn" && css<ButtonPropsType>`
    background-color: ${props => props.bgcolor || "#fff"};
    border: 2px solid ${props => props.borderClr};
    color: ${props => props.colorText};

    &:hover {
      background-color: #4E71FE;
      border: none;
    }
  `}
`
