import React from 'react';
import {
	Text,
	View,
	Image,
	ScrollView,
} from 'react-native';

const style = {
	container: {
		backgroundColor: '#FFF',
	},
	wishImg: {
		flex: 1,
		height: 300,
	},
	wishImgMask: {
		flex: 1,
		backgroundColor: 'rgba(34, 64, 89, 0.2)',
	},
	userImg: {
		width: 48,
		height: 48,
	},
};

const WishDetail = props => {
	const wish = props.navigation.state.params.wish;
	return (
		<ScrollView style={style.container}>
			<View>
				<Image style={style.wishImg} source={{ uri: wish.img_url }}>
					<View style={style.wishImgMask} />
				</Image>
				<Image style={style.userImg} source={{ uri: wish.user.pic_url }} />
				<Text>{wish.user.name}</Text>
				<Text>{wish.text}</Text>
			</View>
		</ScrollView>
	);
};

export default WishDetail;
