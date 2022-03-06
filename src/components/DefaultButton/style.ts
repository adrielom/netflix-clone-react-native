import { TouchableOpacity } from 'react-native';
import { DefaultButtonProps } from './index';
import styled from "styled-components/native";
import DefaultButton from ".";
import themes from "../../themes";
import { RectButton } from 'react-native-gesture-handler';

export const StandartButton = styled(RectButton)<DefaultButtonProps>`
    width: 50%;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    background-color: ${({accent}) => (accent == true ? themes.COLORS.RED : themes.COLORS.WHITE)};
`;