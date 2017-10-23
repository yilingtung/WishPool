import React, { Component } from 'react';
import {
	Animated,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import Comments from '../components/Comments';

const defaultSource = require('../public/images/default_image.png');

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
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
	scrollViewContent: {
		marginTop: HEADER_MAX_HEIGHT,
	},
	backgroundImage: {
		opacity: 0.8,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		flex: 1,
		height: HEADER_MAX_HEIGHT,
	},
};

export default class WishDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollY: new Animated.Value(0),
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
						headerMaxHeight={HEADER_MAX_HEIGHT}
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
				</Animated.View>
			</View>
		);
	}
}
