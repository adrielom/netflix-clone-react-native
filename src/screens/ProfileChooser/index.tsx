import React from 'react'
import themes from '../../themes';
import { Alert, Text, View, } from 'react-native'

import AppLoading from 'expo-app-loading';
import NetflixLogo from '../../components/NetflixLogo'
import SafeAreaComponent from '../../components/SafeAreaComponent'
import ProfileIcon, { animationGrow } from '../../components/ProfileIcon';

import { EditButton, EditIcon, HeaderView, MainView, Title, WrapperView } from './styles'
import { useNavigation } from '@react-navigation/native';
import { RoutesProps } from '../../routes/stack.routes';
import { StackNavigationProp } from '@react-navigation/stack';


import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { MaterialIcons } from '@expo/vector-icons';
import {useAnimationState} from 'moti'
import PressableAnimation from '../../components/PressableAnimation';
import { ProfileStruct, useProfile } from '../../contexts/profile';
import { avatarImages } from '../../services/images'

type ProfileChooserProps = StackNavigationProp<RoutesProps,'HomeRoutes'>


export default function ProfileChooser() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  const navigation = useNavigation<ProfileChooserProps>()
  const isNotTheLastElement = (index:number) => index !== avatarImages.length;
  const messageUnavailable = 'This functionality is currently unavailable'
  const {profile, setProfile} = useProfile();

  const handleProfileSelection = (name: string, imageSource: string) => {
    setProfile({name, source: imageSource} as ProfileStruct);
    navigation.push('HomeRoutes');
  }

  if (!fontsLoaded) {
    return <AppLoading />
  } else {

    return (

        
      <WrapperView>
      <SafeAreaComponent>
        <HeaderView>
          <NetflixLogo height={30} />
          <EditButton onPress={() => Alert.alert(messageUnavailable)}>
            <EditIcon name="edit" color="white" size={24}/>
          </EditButton>
        </HeaderView> 
        <Title style={{fontFamily: 'Inter_400Regular'}}> Who's watching? </Title>

        <MainView
          data={[...avatarImages, {}, {}]}
          numColumns={2}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          keyExtractor={(data: any) => data.photo}
          renderItem= {({item, index}: any) => (
            isNotTheLastElement(index) ? 
            (
              <ProfileIcon onPress={
                              () => handleProfileSelection(item.name, item.photo)} 
                           userName={item.name} 
                           size={100} 
                           source={item.photo}
              />
            )
            :
            (
              <View style={{alignItems: 'center'}}>
                <PressableAnimation onPress={() => Alert.alert(messageUnavailable)} animationState={animationGrow}>
                  <MaterialIcons style={{marginVertical: 10}} name="add-circle" size={60} color="white" />
                </PressableAnimation>
                <Text style={{color: themes.COLORS.WHITE}}>Adicionar perfil</Text>
              </View>
            )
          )}
        />
      </SafeAreaComponent>
      </WrapperView>
      
    )
  }
}