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
		height: 200,
	},
	userImg: {
		width: 48,
		height: 48,
	}
};

const WishDetail = props => {
	const wish = props.navigation.state.params.wish;
	return (
		<ScrollView style={style.container}>
			<View>
				<Image style={style.wishImg} source={{ uri: wish.img_url }} />
				<Image style={style.userImg} source={{ uri: wish.user.pic_url }} />
				<Text>{wish.user.name}</Text>
				<Text>{wish.text}</Text>
			</View>
		</ScrollView>
	);
};

export default WishDetail;
