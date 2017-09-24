import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	TouchableOpacity,
} from 'react-native';
import style from './style';
import wishes from '../../data.json';

class WishList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wishes,
		};
	}
	componentWillMount() {
		if (this.state.wishes) {
			const wishList = this.state.wishes.map(wish => (
				<TouchableOpacity key={wish.id} style={style.wish}>
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
						<Text style={style.possibility} >{wish.possibility}%</Text>
						<TouchableOpacity>
							<Text>{wish.msgs.length}</Text>
						</TouchableOpacity>
					</View>
				</TouchableOpacity>
			));
			this.setState({ wishList });
		}
	}
	render() {
		return (
			<View style={style.wishList}>{this.state.wishList}</View>
		);
	}
}

export default WishList;
