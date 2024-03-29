import { SafeAreaView, View } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import { getTrendingMovies } from '../../services/api';
import { StatusBar } from 'expo-status-bar';
import { Movie } from '../../types';
import {
	BackgroundImage,
	ForgotYourPasswordText,
	InputLayout,
	LoginForm,
	Overlay,
} from './style';
import themes from '../../themes';
import DefaultButton from '../../components/DefaultButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RoutesProps } from '../../routes/stack.routes';
import { Wrapper } from '../../components/Wrapper';
import NetflixLogo from '../../components/NetflixLogo';
import SafeAreaComponent from '../../components/SafeAreaComponent';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
type LoginProps = StackNavigationProp<RoutesProps, 'ProfileChooser'>;

SplashScreen.preventAutoHideAsync();

const Login = () => {
	const [isAppDone, setIsAppDone] = useState(false);
	const [movie, setMovie] = useState<Movie>();
	const navigation = useNavigation<LoginProps>();
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
	});

	const handlePress = () => {
		navigation.navigate('ProfileChooser');
	};

	useEffect(() => {
		const photoUrl = async () => {
			try {
				const data = (await getTrendingMovies()) as Array<Object>;
				const movie = data[Math.floor(Math.random() * data.length)] as Movie;
				setMovie(movie);
			} catch (error) {}
		};

		photoUrl();
		setIsAppDone(true);
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (isAppDone) {
			await SplashScreen.hideAsync();
		}
	}, [isAppDone]);

	function componentScreen() {
		return (
			<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
				<StatusBar
					hidden={false}
					style='light'
					translucent
					backgroundColor='transparent'
				/>
				<Overlay />
				<BackgroundImage
					source={{
						uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
					}}
					resizeMode='cover'
				/>
				<SafeAreaComponent>
					<Wrapper>
						<NetflixLogo />
						<LoginForm>
							<InputLayout
								style={{
									borderBottomColor: themes.COLORS.WHITE,
									borderBottomWidth: 1,
									marginTop: '20%',
									fontFamily: 'Inter_400Regular',
								}}
								placeholderTextColor={themes.COLORS.WHITE}
								placeholder='Email'
								keyboardType='email-address'
							/>
							<InputLayout
								style={{
									borderBottomColor: themes.COLORS.WHITE,
									borderBottomWidth: 1,
									fontFamily: 'Inter_400Regular',
								}}
								placeholderTextColor={themes.COLORS.WHITE}
								placeholder='Password'
								secureTextEntry={true}
							/>
							<ForgotYourPasswordText
								style={{ fontFamily: 'Inter_400Regular' }}>
								Forgot your email and password?
							</ForgotYourPasswordText>
							<View style={{ flexDirection: 'row' }}>
								<DefaultButton
									textStyle={{ fontFamily: 'Inter_400Regular' }}
									title='Sign In'
									accent
								/>
								<DefaultButton
									textStyle={{ fontFamily: 'Inter_400Regular' }}
									title='Login'
									onPress={handlePress}
									activeOpacity={0.8}
								/>
							</View>
						</LoginForm>
					</Wrapper>
				</SafeAreaComponent>
			</View>
		);
	}
	if (!isAppDone || !fontsLoaded) return null;
	return componentScreen();
};

export default Login;
