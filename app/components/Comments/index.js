import React from 'react';
import {
	Text,
	View,
	Image,
} from 'react-native';
import style from './style';

const Comments = props => (
	<View style={[style.container, { marginTop: props.headerMaxHeight }]}>
		<Text style={style.title}>留言</Text>
		{props.msgs.length > 0 ?
			props.msgs.map(msg => (
				<View key={msg.id} style={style.comment}>
					<Image
						style={style.userImg}
						source={{ uri: msg.user.pic_url }}
					/>
					<View style={style.content}>
						<Text style={style.name}>{msg.user.name}</Text>
						<Text style={style.text}>{msg.comment}</Text>
					</View>
				</View>
			))
			:
			<View><Text style={[style.text, style.textCenter]}>還沒有留言</Text></View>
		}
	</View>
);

export default Comments;
