import { connect } from 'react-redux';

import WishList from './wishList';

const mapStateToProps = (state, ownProps) => ({
	wishes: state.wishes,
	navigate: ownProps.navigate,
});

export default connect(mapStateToProps)(WishList);
