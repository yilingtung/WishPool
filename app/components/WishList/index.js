import { connect } from 'react-redux';

import WishList from './wishList';

const mapStateToProps = state => ({
	wishes: state.wishes,
});

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) => dispatch({ type: 'NAVIGATE', routeName, params }),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
