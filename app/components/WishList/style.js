import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default {
	wishList: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	wish: {
		width: (width / 2) - 15,
		marginTop: 10,
		marginLeft: 10,
		borderRadius: 5,
		overflow: 'hidden',
		backgroundColor: '#FFF',
	},
	wishImg: {
		width: '100%',
		height: 150,
	},
	userImg: {
		width: 36,
		height: 36,
		borderRadius: 18,
	},
	wishText: {
		fontSize: 18,
		marginVertical: 5,
		color: '#34495E',
	},
	possibility: {
		fontSize: 28,
		lineHeight: 36,
		color: '#34495E',
	},
	possibility1: {
		fontSize: 18,
		color: '#34495E',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
	},
};
