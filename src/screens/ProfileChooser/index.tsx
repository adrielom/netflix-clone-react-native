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
import { useProfile } from '../../contexts/profile';

const users = [
  { name: 'jessica', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/fd69a733850498.56ba69ac2f221.png', color: 'blue'},
  { name: 'rute', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png', color: 'red'},
  { name: 'Márcio', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png', color: 'purple'},
  { name: 'Jessy e Evy', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png', color: 'cyan'}
]

type ProfileChooserProps = StackNavigationProp<RoutesProps,'HomeRoutes'>


export default function ProfileChooser() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  const navigation = useNavigation<ProfileChooserProps>()
  const isNotTheLastElement = (index:number) => index !== users.length;
  const messageUnavailable = 'This functionality is currently unavailable'
  const {profile, setProfile} = useProfile();

  const handleProfileSelection = (name: string) => {
    console.log(name)
    setProfile(name);
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
          data={[...users, {}, {}]}
          numColumns={2}
          contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
          keyExtractor={(data: any) => data.photo}
          renderItem= {({item, index}: any) => (
            isNotTheLastElement(index) ? 
            (
              <ProfileIcon onPress={() => handleProfileSelection(item.name)} userName={item.name} size={100} source={item.photo}/>
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