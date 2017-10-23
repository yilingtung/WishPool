import React, { Component } from 'react';
import {
	Animated,
	Image,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import Comments from '../components/Comments';

const defaultSource = require('../public/images/default_image.png');
const iconPlus = require('../public/images/icon_plus_color.png');
const iconMinus = require('../public/images/icon_minus_color.png');

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const style = {
	container: {
		backgroundColor: '#FFF',
	},
	fill: {
		flex: 1,
	},
	row: {
		height: 40,
		margin: 16,
		backgroundColor: '#D3D3D3',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: '#000',
		overflow: 'hidden',
	},
	backgroundImage: {
		opacity: 0.8,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		flex: 1,
		height: HEADER_MAX_HEIGHT,
	},
	userInfo: {
		backgroundColor: '#FFF',
	},
	wishHeader: {
		paddingHorizontal: 6,
		backgroundColor: '#FFF',
	},
	wishUser: {
		flexDirection: 'row',
	},
	userImg: {
		marginTop: -32,
		marginRight: 6,
		width: 64,
		height: 64,
		borderRadius: 32,
		borderWidth: 3,
		borderColor: '#FFF',
	},
	userName: {
		color: '#34495E',
		fontWeight: 'bold',
		fontSize: 18,
		height: 32,
		lineHeight: 44,
		marginBottom: 6,
	},
	wishText: {
		color: '#34495E',
		paddingLeft: 70,
		marginTop: 10,
		marginBottom: 20,
	},
	possibility: {
		flexDirection: 'row',
		borderTopColor: 'rgba(189, 195, 199, 0.2)',
		borderBottomColor: 'rgba(189, 195, 199, 0.2)',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	posBtn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 42,
	},
	posText: {
		position: 'absolute',
		width: '100%',
		lineHeight: 42,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#91959E',
	},
};

export default class WishDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: new Animated.Value(0),
			userInfoHeight: 0,
			wish: props.navigation.state.params.wish,
		};
	}

	render() {
		const headerTranslate = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [0, -HEADER_SCROLL_DISTANCE],
			extrapolate: 'clamp',
		});
		const imageTranslate = this.state.scrollY.interpolate({
			inputRange: [0, HEADER_SCROLL_DISTANCE],
			outputRange: [0, 100],
			extrapolate: 'clamp',
		});
		return (
			<View style={[style.container, style.fill]}>
				<Animated.ScrollView
					style={style.fill}
					scrollEventThrottle={1}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
						{ useNativeDriver: true },
					)}
				>
					<Comments
						msgs={this.props.navigation.state.params.wish.msgs}
						headerMaxHeight={HEADER_MAX_HEIGHT + this.state.userInfoHeight}
					/>
				</Animated.ScrollView>
				<Animated.View
					style={[
						style.header,
						{ transform: [{ translateY: headerTranslate }] },
					]}
				>
					<Animated.Image
						style={[
							style.backgroundImage,
							{
								transform: [{ translateY: imageTranslate }],
							},
						]}
						defaultSource={defaultSource}
						source={{ uri: this.state.wish.img_url }}
					/>
					<View
						style={style.userInfo}
						onLayout={event => {
							this.setState({
								userInfoHeight: event.nativeEvent.layout.height,
							});
						}}
					>
						<View style={style.wishHeader}>
							<View style={style.wishUser}>
								<Image style={style.userImg} source={{ uri: this.state.wish.user.pic_url }} />
								<Text style={style.userName}>{ this.state.wish.user.name }</Text>
							</View>
							<Text style={style.wishText}>{ this.state.wish.text }</Text>
						</View>
						<View style={style.possibility}>
							<Text style={style.posText}>{ this.state.wish.possibility } %</Text>
							<TouchableOpacity style={style.posBtn}>
								<Image source={iconMinus} />
							</TouchableOpacity>
							<TouchableOpacity style={style.posBtn}>
								<Image source={iconPlus} />
							</TouchableOpacity>
						</View>
					</View>
				</Animated.View>
			</View>
		);
	}
}
