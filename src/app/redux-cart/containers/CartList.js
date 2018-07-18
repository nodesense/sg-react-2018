import {connect} from 'react-redux';

import CartList from '../components/CartList';

function mapStateToProps(state) {
    return {
        items: state.items
    }
}

//create and return CartListContainer
export default connect(mapStateToProps,null)(CartList);