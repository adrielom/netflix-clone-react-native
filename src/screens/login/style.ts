import styled from "styled-components/native";
import themes from '../../themes';


export const BackgroundImage = styled.ImageBackground`
    width: auto; 
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: #000;
`;

export const Overlay = styled.View`
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.7;
    z-index: 1;
`;

export const InputLayout = styled.TextInput`
    width: 100%;
    margin-top: 10%;
    color: ${themes.COLORS.WHITE};
`;

export const ForgotYourPasswordText = styled.Text`
    color: ${themes.COLORS.WHITE};
    opacity: .7;
    padding-top: 10%;
    padding-bottom: 10%;
    font-style: italic;
    font-size: ${themes.FONTS_SIZE.sm}px;
`;

export const LoginForm = styled.KeyboardAvoidingView`
    width: 90%;
`;

