import { connect } from 'react-redux';
import { poolNavNavigate } from '../../store/navs/actions';
import { fetchWishes } from '../../store/wishes/actions';
import WishList from './wishList';

const mapStateToProps = state => ({
	wishes: state.wishes,
});

const mapDispatchToProps = dispatch => ({
	goToScreen: (routeName, params) => dispatch(poolNavNavigate(routeName, params)),
	fetchWishes: () => dispatch(fetchWishes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WishList);
