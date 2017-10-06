import { connect } from 'react-redux';
import { navigate } from '../../store/navs/actions';
import { fetchWishes } from '../../store/wishes/actions';
import WishList from './wishList';

const mapStateToProps = state => ({
	wishes: state.wishes,
});

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) => dispatch(navigate(routeName, params)),
	fetchWishes: () => dispatch(fetchWishes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
