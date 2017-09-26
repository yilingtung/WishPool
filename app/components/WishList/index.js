import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import WishList from './wishList';

const mapStateToProps = state => ({
	wishes: state.wishes,
});

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) =>
		dispatch(NavigationActions.navigate({ routeName, params })),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
