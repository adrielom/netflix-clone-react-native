import { Dimensions } from 'react-native';
import styled from "styled-components/native";

const MovieCardHeight = Math.floor(Dimensions.get('window').height / 5)
const MovieCardWidth = Math.floor(Dimensions.get('window').width / 3)

export const MovieCardStyle = styled.View`
    height: ${MovieCardHeight}px;
    width: ${MovieCardWidth}px;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
`;

export const MovieCardIconCircle = styled.View`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    border-width: 2px;
    border-color: white;
    position: relative;
`;

export const MovieCardBackgroundImage = styled.ImageBackground`
    height: auto;
    width: auto;
`;

export const SeriesText = styled.Text`

`;
export const MovieCardFooter = styled.View`
    background-color: #202020;
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    height: ${MovieCardHeight * 0.25}px;
    
`;
