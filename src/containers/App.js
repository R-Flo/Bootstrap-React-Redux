import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import App from '../components/App'
import * as actions from '../actions/count'

const mapStateToProps = (state) => {
    return {
        count : state.count.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

