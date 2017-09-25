import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import style from './style';

class WishList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { wishes, navigate } = this.props;
		return (
			<View style={style.wishList}>
				{wishes.map(wish => (
					<TouchableOpacity
						key={wish.id}
						style={style.wish}
						onPress={() => navigate('WishDetail', { text: wish.text })}
					>
						<View style={style.row}>
							<View style={style.flex1}>
								<Image style={style.userImg} source={{ uri: wish.user.pic_url }} />
								<Text>{wish.text}</Text>
							</View>
							<View style={style.flex1}>
								<Image style={style.wishImg} source={{ uri: wish.img_url }} />
							</View>
						</View>
						<View style={style.wishFotter}>
							<Text style={style.possibility}>{wish.possibility}%</Text>
							<TouchableOpacity>
								<Text>{wish.msgs.length}</Text>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				))}
			</View>
		);
	}
}

export default WishList;
