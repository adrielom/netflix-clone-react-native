import { RectButton } from 'react-native-gesture-handler';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import themes from '../../themes';

export const HeaderView = styled.View`
    justify-content: flex-start;
    align-items: center;
    height: 20%;
    width: 100%;
    padding-top: 10px;
`;

export const MainView = styled.FlatList`
   flex: 1
`;

export const WrapperView = styled.View`
    background-color: #000;
    flex: 1;
`;

export const EditIcon = styled(MaterialIcons)`
`;

export const EditButton = styled(RectButton)`
    position: absolute;
    right: 10%;
    top: 15px;
`;

export const Title = styled.Text`
    font-size: ${themes.FONTS_SIZE.md}px;
    color: ${themes.COLORS.WHITE};
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
`;