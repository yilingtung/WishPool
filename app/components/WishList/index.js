import { connect } from 'react-redux';
import * as types from '../../store/navs/actionTypes';
import WishList from './wishList';

const mapStateToProps = state => ({
	wishes: state.wishes,
});

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) => dispatch({ type: types.NAVIGATE, routeName, params }),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
