import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene';
import HomeScreen from './scenes/HomeScreen';
import {LogBox} from 'react-native';
import ResultDetails from './scenes/ResultDetails';
import ReviewScreen from './scenes/ReviewScreen';
import PlanChooser from './scenes/PlanChooser';
import AddressPay from './scenes/AddressPay';
import ManageAddress from './scenes/ManageAddress';
import CheckOut from './scenes/CheckOut';
import OrderHistory from './scenes/Components/OrderHistory';
import Policies from './scenes/Components/Policies';
import Rewards from './scenes/Components/Rewards';
class App extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['Animated : `useNativeDriver` ']);
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="loading"
            component={LoadingScene}
            initial={true}
            hideNavBar={true}></Scene>
          <Scene key="auth" component={AuthScene} hideNavBar={true}></Scene>
          <Scene key="home" component={HomeScreen} hideNavBar={true}></Scene>
          <Scene
            key="details"
            component={ResultDetails}
            onRight={() => console.log('Hello')}
            rightButtonImage={require('./images/fbicon.png')}></Scene>
          <Scene key="reviews" component={ReviewScreen} title={'Reviews'} ></Scene>
          <Scene key="planchooser" component={PlanChooser}></Scene>
          <Scene key="address" component={AddressPay} hideNavBar={true}></Scene>
          <Scene
            key="manageaddress"
            component={ManageAddress}
            title="Manage Address"></Scene>
          <Scene key="checkout" component={CheckOut}></Scene>
          <Scene
            key="orderhistory"
            component={OrderHistory}
            title="Order History"></Scene>
          <Scene key="policies" component={Policies} title="About"></Scene>
          <Scene key="coupons" component={Rewards} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

export default App;
