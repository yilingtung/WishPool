import { connect } from 'react-redux';
import BackButton from './backButton';

const mapStateToProps = ownProps => ({
	navigation: ownProps.navigation,
});

const mapDispatchToProps = dispatch => ({
	backto: () => dispatch({ type: 'BACK_TO' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
