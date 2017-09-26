import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import BackButton from './backButton';

const mapDispatchToProps = dispatch => ({
	goBack: () => dispatch(NavigationActions.goBack()),
});

export default connect(null, mapDispatchToProps)(BackButton);
