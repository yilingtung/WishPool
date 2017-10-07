import React, { Component } from 'react';
import {
	Text,
	View,
	Image,
	ListView,
	TouchableOpacity,
} from 'react-native';
import style from './style';

class WishList extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(this.renderWishes()),
		};
	}
	componentDidMount() {
		this.props.fetchWishes();
	}
	renderWishes () {
		let wishList;
		if (this.props.wishes.list.length > 0)
			wishList = this.props.wishes.list.map(id => this.props.wishes.group[id]);
		return wishList == undefined ? [] : wishList;
	}
	render() {
		const { goToScreen } = this.props;
		return (
			<ListView
				contentContainerStyle={style.wishList}
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={wish =>
					<TouchableOpacity
						key={wish.id}
						style={style.wish}
						onPress={() => goToScreen('WishDetail', { title: wish.text, wish })}
					>
						<Image style={style.wishImg} source={{ uri: wish.img_url }} />
						<Text style={style.wishText}>{wish.text}</Text>
						<View style={style.row}>
							<Image style={style.userImg} source={{ uri: wish.user.pic_url }} />
							<Text style={style.possibility}>
								{wish.possibility}
								<Text style={style.possibility1}> %</Text>
							</Text>
						</View>
					</TouchableOpacity>
				}
			/>
		);
	}
}

export default WishList;
