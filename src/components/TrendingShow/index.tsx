import { View, Text, ViewProps, Image, Pressable, ImageSourcePropType, Dimensions } from 'react-native'
import React from 'react'
import NetflixLogo from '../NetflixLogo'
import ProfileIcon from '../ProfileIcon'
import { CategoriesText, Footer, Header, IconSet, More, N_Netflix, TrendingWatch } from './style'
import MyWatchListButton from '../MyWatchList'
import { Feather } from '@expo/vector-icons';
import themes from '../../themes'
import { RFPercentage } from 'react-native-responsive-fontsize'

import { FontAwesome } from '@expo/vector-icons';
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter"
import AppLoading from 'expo-app-loading'
import { LinearGradient } from 'expo-linear-gradient'

type Props = ViewProps & {
    profileIconSource: string,
    userName:string,
    categories: string,
    showCoverBillboard: string;
}

const Netflix = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.png';

export default function TrendingShow({profileIconSource, userName, categories, showCoverBillboard}: Props) {

    const [fontsLoaded] = useFonts({
        Inter_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />
    } else {

        return (
            <View
                style={{flex: 1}}
            >
                <TrendingWatch 
                resizeMode='cover' 
                style={{
                    top: 0,
                    height: Dimensions.get('window').height * 0.65
                }} 
                source={{uri: `https://image.tmdb.org/t/p/w500/${showCoverBillboard}`}}>
                <LinearGradient
                    key={showCoverBillboard}
                        // Background Linear Gradient
                        colors={['#000000', '#000000e7', 'transparent', '#000000a8']}
                        start={{x: 0, y: 0.95}}
                        end={{x: 0, y: 0}} 
                        locations={[0, 0.05, 0.25, 1]}
                        style={{flex: 1}}                 
                >
               
                <Header>
                    <N_Netflix source={{uri: Netflix}}/>
                    <IconSet>
                        <Feather name="search" size={24} color="white" />
                        <Feather name="sliders" style={{marginHorizontal: 13}} size={24} color="white" />                
                        <ProfileIcon size={25} showName={false} source={profileIconSource} userName={userName} onPress={() => {}}/>
                    </IconSet>
                </Header>

                <Footer>
                    <CategoriesText style={{fontSize: RFPercentage(1.8)}}>{categories}</CategoriesText>
                    <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between'}}>
                        <MyWatchListButton text='Minha Lista' />
                        <Pressable style={{backgroundColor: themes.COLORS.GREY_LIGHT, flexDirection: 'row', margin: 5, padding: 10, minWidth: '33%',position: 'relative', alignItems: 'center'}}>
                            <FontAwesome style={{marginLeft: 10}} name="play" size={18} color="black" /><Feather />
                            <Text style={{ marginLeft: "10%",  fontFamily: 'Inter_700Bold'}}>Assistir</Text>
                        </Pressable>
                        <More>
                            <Feather name='info' size={25} />
                            <Text style={{color: themes.COLORS.WHITE, fontSize: RFPercentage(1.5)}}>Saiba Mais</Text>
                        </More>
                    </View>
                </Footer>
                </LinearGradient>
                </TrendingWatch>
            </View>
        )
    }
}