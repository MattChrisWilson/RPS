import { connect } from 'react-redux';
import History from '../components/History';

const mapStateToProps = (state, props) => {
	return {
		history: state.game.history,
	}
}

export default connect(mapStateToProps)(History)