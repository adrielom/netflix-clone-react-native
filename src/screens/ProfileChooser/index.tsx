import React from 'react'
import { Alert, Image, View, Text, Dimensions, ListRenderItem, ListRenderItemInfo } from 'react-native'

import { EditButton, EditIcon, HeaderView, MainView, Title, WrapperView } from './styles'
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import NetflixLogo from '../../components/NetflixLogo'
import SafeAreaComponent from '../../components/SafeAreaComponent'
import ProfileIcon from '../../components/ProfileIcon';
import { RectButton } from 'react-native-gesture-handler';
import CustomIcon from '../../components/CustomIcon';

import { FontAwesome5 } from '@expo/vector-icons';
import { ProfileIconWrapper } from '../../components/ProfileIcon/style';
import themes from '../../themes';
import { useNavigation } from '@react-navigation/native';
import { RoutesProps } from '../../routes/stack.routes';
import { StackNavigationProp } from '@react-navigation/stack';


const users = [
  { name: 'jessica', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/fd69a733850498.56ba69ac2f221.png', color: 'blue'},
  { name: 'rute', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/c7906d33850498.56ba69ac353e1.png', color: 'red'},
  { name: 'Márcio', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png', color: 'purple'},
  { name: 'Jessy e Evy', photo: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png', color: 'cyan'}
]

type ProfileChooserProps = StackNavigationProp<RoutesProps,'Home'>


export default function ProfileChooser() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });
  const navigation = useNavigation<ProfileChooserProps>()
  const isNotTheLastElement = (index:number) => index !== users.length;
  const messageUnavailable = 'This functionality is currently unavailable'

  const handleProfileSelection = () => {
    navigation.push('Home')
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
              <RectButton 
                  onPress={
                    isNotTheLastElement(index) ? 
                    () => {
                      handleProfileSelection(); 
                    }
                    : 
                    () => Alert.alert(messageUnavailable)
                  }
              >
                  {
                    isNotTheLastElement(index) ?
                    (
                      <ProfileIcon 
                        style={{marginHorizontal: 16, marginVertical: 14}}
                        source={item.photo} 
                        userName={item.name} 
                        size={Dimensions.get('window').width / 3.5} 
                      />
                    )
                    :
                    (
                      <ProfileIconWrapper>
                        <FontAwesome5 name="plus-circle" size={70} color="white" />
                        <Text style={{color: themes.COLORS.WHITE, marginTop: 20}}>Add Profile</Text>
                      </ProfileIconWrapper>
                    )
                  }
              </RectButton>
              
          )}
        />
      </SafeAreaComponent>
      </WrapperView>
      
    )
  }
}