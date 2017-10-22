import React from 'react';
import {
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

const iconPlus = require('../public/images/icon_plus_color.png');
const iconMinus = require('../public/images/icon_minus_color.png');

const style = {
	container: {
		backgroundColor: '#FFF',
	},
	wishImg: {
		flex: 1,
		height: 240,
	},
	wishImgMask: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
	wishHeader: {
		height: 80,
		paddingHorizontal: 6,
		backgroundColor: '#FFF',
		marginBottom: 20,
	},
	wishUser: {
		flexDirection: 'row',
	},
	userImg: {
		marginTop: -32,
		marginRight: 6,
		width: 64,
		height: 64,
	},
	userName: {
		color: '#34495E',
		fontWeight: 'bold',
		fontSize: 18,
		height: 32,
		lineHeight: 32,
		marginBottom: 6,
	},
	wishText: {
		color: '#34495E',
		paddingLeft: 70,
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

const WishDetail = props => {
	const wish = props.navigation.state.params.wish;
	return (
		<ScrollView style={style.container}>
			<View>
				<Image style={style.wishImg} source={{ uri: wish.img_url }}>
					<View style={style.wishImgMask} />
				</Image>
				<View style={style.wishHeader}>
					<View style={style.wishUser}>
						<Image style={style.userImg} source={{ uri: wish.user.pic_url }} />
						<Text style={style.userName}>{ wish.user.name }</Text>
					</View>
					<Text style={style.wishText}>{ wish.text }</Text>
				</View>
				<View style={style.possibility}>
					<Text style={style.posText}>{ wish.possibility } %</Text>
					<TouchableOpacity style={style.posBtn}>
						<Image source={iconMinus} />
					</TouchableOpacity>
					<TouchableOpacity style={style.posBtn}>
						<Image source={iconPlus} />
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default WishDetail;
