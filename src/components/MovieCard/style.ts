import { Dimensions } from 'react-native';
import styled from "styled-components/native";
import themes from '../../themes';

const MovieCardHeight = Math.floor(Dimensions.get('window').height / 4)
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
    margin: auto;
`;

export const MovieCardBackgroundImage = styled.ImageBackground`
    flex: 1;
    position: relative;
    background-color: ${themes.COLORS.GREY_LIGHT};
    width: 100%;
`;

export const SeriesText = styled.Text`

`;
export const MovieCardFooter = styled.View`
    background-color: ${themes.COLORS.GREY_LIGHT};
    flex-direction: row;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    width: 100%;
    align-items: center;
    height: ${MovieCardHeight * 0.25}px;
    
`;
