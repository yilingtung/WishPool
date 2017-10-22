import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default {
	wishList: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	wish: {
		width: (width / 2) - 15,
		marginTop: 5,
		marginBottom: 15,
		marginLeft: 10,
		// borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: '#FFF',
	},
	wishImg: {
		width: '100%',
		height: 150,
		borderRadius: 5,
	},
	user: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5,
	},
	userImg: {
		width: 24,
		height: 24,
		borderRadius: 12,
		marginRight: 5,
	},
	userName: {
		fontSize: 16,
		color: '#34495E',
	},
};
