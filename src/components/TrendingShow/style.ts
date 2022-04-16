import styled from "styled-components/native";

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 15px;
    z-index: 10;
    width: 100%;
`;

export const N_Netflix = styled.Image`
    width: 20px;
    height: 35px;
    margin: 5% 0 0 5%;
`;

export const IconSet = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    margin: 5% 0 0 0;
`;

export const Footer = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    width: 100%;
    margin-bottom: 5%;
    position: relative;
`;
export const CategoriesText = styled.Text`
    color: white;
`;

export const TrendingWatch = styled.ImageBackground`
    height: 100%;
    margin-bottom: 5%;
    `;

export const More = styled.View`
   justify-content: center;
   align-items: center;
   `;



